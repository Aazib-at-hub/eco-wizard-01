// src/components/Footer.jsx
import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-green-400 w-6 h-6" />
            <span className="text-xl font-bold text-green-300">EcoPoints</span>
          </div>
          <p className="text-sm text-gray-400">
            Earn rewards for your sustainable actions. Travel green, live clean.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/rewards" className="hover:text-white">Rewards</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EcoPoints. All rights reserved.
      </div>
    </footer>
  );
}
