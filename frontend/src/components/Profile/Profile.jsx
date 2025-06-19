import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Loader2 } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No token found');

        const res = await fetch('http://your-backend.com/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.error || 'Unauthorized');
        }

        setUser(data);
      } catch (err) {
        setError('Unauthorized. Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        <Loader2 className="animate-spin w-6 h-6 mr-2" /> Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <User className="text-green-600 w-6 h-6" /> Profile
          </h2>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 flex items-center gap-1 hover:underline"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
            alt="avatar"
            className="w-16 h-16 rounded-full border-2 border-green-500"
          />
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-xl shadow-sm text-green-800 text-center">
          🌱 <strong>{user.ecoPoints}</strong> EcoPoints
        </div>
      </div>
    </div>
  );
}
