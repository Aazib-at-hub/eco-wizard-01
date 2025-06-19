import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-between h-[90vh] bg-black text-white px-6 md:px-16 py-10 overflow-hidden">

      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="text-green-400 w-8 h-8" />
          <h2 className="text-2xl font-bold text-green-300 tracking-wide">EcoTrack</h2>
        </div>

        {/* Heading */}
        <h1 className="pt-2 text-4xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-lg">
          Travel Green, Earn More, Explore Better!
        </h1>

        {/* Subheading */}
        <p className="pr-8 mt-4 text-lg text-gray-200">
          Learn How Eco-Point Passport Works and start your <br /> journey towards sustainable tourism.
        </p>

        {/* Highlights */}
        {/* <div className="mt-6 text-sm text-green-100 font-medium space-y-1">
          <p> Earn EcoPoints for recycling, walking, carpooling</p>
          <p> Compete with friends, unlock badges & streaks</p>
          <p> Plant trees using your points. Be the change.</p>
        </div> */}

        {/* CTA Button */}
        {/* <Link to="/login">
          <button className="mt-2 bg-green-600 text-white px-4 py-3 rounded-full text-lg hover:bg-green-700 transition">
            Login
          </button>
        </Link> */}

      </div>

      {/* Right Image */}
       <div className="w-full md:w-1/2 h-72 md:h-full mt-10 md:mt-0">
      <img
        src="public/main.jpg"
        alt="EcoPoints"
        className="w-full h-full rounded-3xl object-cover rounded-none shadow-lg transition duration-300"
      />
    </div>
    </div>
  );
}
