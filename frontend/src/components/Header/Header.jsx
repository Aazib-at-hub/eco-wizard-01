import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto h-20 px-6 py-4 flex justify-between items-center">
            <Link to="/">
                <div className="text-2xl font-bold text-green-700">🌱Eco-Points</div>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
                    <Link to="/home">
                        <div className="hover:text-green-600 cursor-pointer">Home</div>
                    </Link>
                    <Link to="/mission">
                    <div className="hover:text-green-600 cursor-pointer">Missions</div>
                    </Link>
                    <Link to="/points">
                    <div className="hover:text-green-600 cursor-pointer">Points</div>
                    </Link>
                    {/* <div className="hover:text-green-600 cursor-pointer">My Passport</div> */}
                    <Link to = "/redeem">
                    <div className="hover:text-green-600 cursor-pointer">Redeem</div>
                    </Link>
                    <Link to="/learn">
                    <div className="hover:text-green-600 cursor-pointer">Learn</div>
                    </Link>
                    <Link to="/profile">
                    <div className="hover:text-green-600 cursor-pointer">Profile</div>
                    </Link>
                </nav>

                <Link to="/login" className="mt-1 bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition">
                    Login
                </Link>
            </div>
        </header>
    );
}


export default Header;