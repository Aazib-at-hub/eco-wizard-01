import react from "react";
import { FormEvent,useState } from "react";
import { Mail, Lock, UserPlus } from "lucide-react";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = function(FormEvent){
    e.preventDefault();
    // Handle login or signup logic here
    alert(`${isSignup ? "Signup" : "Login"} submitted!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-xl bg-white">
        <div className="flex flex-col items-center mb-6">
          <UserPlus className="text-green-600 w-10 h-10" />
          <h2 className="text-2xl font-bold text-gray-700 mt-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500">
            {isSignup
              ? "Join the green mission today."
              : "Login to your EcoTrack account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border rounded px-3 py-2 mt-1">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded px-3 py-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {isSignup && (
            <div>
              <label className="text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <div className="flex items-center border rounded px-3 py-2 mt-1">
                <Lock className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>
          )}

          {!isSignup && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600 font-medium hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
