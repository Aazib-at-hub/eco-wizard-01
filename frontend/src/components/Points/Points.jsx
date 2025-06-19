import React from 'react';
import { Sparkles, Gift, Leaf } from 'lucide-react';


const Points = ({ totalPoints = 1200, level = 'Green Guardian', progress = 75 }) => {
  return (
    <div className="mb-20 h-full">
    <div className="relative top-20 left-50  mt-20 mb-20 max-w-md mx-auto p-20 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
      <div className=" flex items-center gap-4">
        <Leaf className="text-green-500 w-10 h-10" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your EcoPoints</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Earn by choosing eco-friendly actions</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-4xl font-bold text-green-600">{totalPoints}</div>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <Gift className="w-4 h-4" /> Redeem
        </button>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-1 text-sm text-gray-700 dark:text-gray-300">
          <span>Level: {level}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <ul className="list-disc list-inside space-y-1">
          <li>+100: EV ride</li>
          <li>+300: Eco-friendly hotel stay</li>
          <li>+800: Recycled waste drop-off</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Points;
