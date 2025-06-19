import React, { useState, useEffect } from 'react';
import { Bike, Recycle, Leaf } from 'lucide-react';

const challengesData = [
  {
    title: 'Use a Bicycle Today',
    points: 30,
    icon: <Bike className="w-6 h-6 text-green-600" />,
    badge: 'Cyclist',
  },
  {
    title: 'Recycle Plastic Waste',
    points: 20,
    icon: <Recycle className="w-6 h-6 text-green-600" />,
    badge: 'Recycler',
  },
  {
    title: 'Carry Your Own Bag',
    points: 10,
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    badge: 'Eco Shopper',
  },
];

const Challenges = () => {
  const [badges, setBadges] = useState([]);

  const completeChallenge = (badgeName) => {
    if (!badges.includes(badgeName)) {
      setBadges((prev) => [...prev, badgeName]);
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-green-50 p-6 flex flex-col items-center font-[Manrope]">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Green Challenges</h2>

        {challengesData.map((challenge, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 mb-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">{challenge.icon}</div>
              <div>
                <div className="font-semibold text-gray-700">{challenge.title}</div>
                <div className="text-sm text-green-600">Earn {challenge.points} EcoPoints</div>
              </div>
            </div>
            <button
              onClick={() => completeChallenge(challenge.badge)}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded"
            >
              Complete
            </button>
          </div>
        ))}

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏅 Earned Badges</h3>
          <div className="min-h-[40px] p-3 bg-green-100 rounded text-sm text-green-800">
            {badges.length === 0 ? (
              <p>No badges earned yet.</p>
            ) : (
              <ul className="list-disc list-inside">
                {badges.map((badge, idx) => (
                  <li key={idx}>{badge}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-green-700 text-sm hover:underline inline-block mt-4"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
