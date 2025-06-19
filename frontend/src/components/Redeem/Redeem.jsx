import React, { useState } from 'react';
import { ArrowLeft, Gift, Utensils, BusFront, ShoppingBag } from 'lucide-react';

const rewardsData = [
  {
    category: 'Food & Drink',
    icon: <Utensils className="w-5 h-5 text-emerald-600" />,
    items: [
      { title: '10% Off at Green Café', cost: 100 },
    ],
  },
  {
    category: 'Accessories',
    icon: <ShoppingBag className="w-5 h-5 text-yellow-500" />,
    items: [
      { title: 'Free Eco Tote Bag', cost: 80 },
    ],
  },
  {
    category: 'Transport',
    icon: <BusFront className="w-5 h-5 text-sky-600" />,
    items: [
      { title: 'Metro Pass Recharge ₹50', cost: 120 },
    ],
  },
];

export default function Redeem() {
  const [points, setPoints] = useState(240);
  const [confirmation, setConfirmation] = useState('');
  const redeemReward = (cost, title) => {
    if (points >= cost) {
      setPoints(prev => prev - cost);
      setConfirmation(`✅ You redeemed "${title}" successfully!`);
    } else {
      setConfirmation(`❌ Not enough EcoPoints to redeem "${title}".`);
    }

    setTimeout(() => setConfirmation(''), 3000);
  };

  return (
    <div className="vh-1 mb-20 relative top-20 bg-gradient-to-br from-green-50 to-white p-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <a
            href="index.html"
            className="text-sm text-gray-600 hover:text-green-600 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </a>
          <div className="text-lg font-semibold text-green-700">
            EcoPoints: <span className="font-bold">{points}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Gift className="text-green-500 w-6 h-6" />
          Redeem Rewards
        </h2>

        {rewardsData.map((category, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
              {category.icon}
              {category.category}
            </div>
            <div className="space-y-3">
              {category.items.map((reward, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <div className="font-medium text-gray-800">{reward.title}</div>
                    <div className="text-sm text-gray-500">Cost: {reward.cost} EcoPoints</div>
                  </div>
                  <button
                    onClick={() => redeemReward(reward.cost, reward.title)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded-lg shadow"
                  >
                    Redeem
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {confirmation && (
          <div className="mt-4 text-center text-sm font-medium text-green-700 bg-green-100 border border-green-300 rounded-lg p-3">
            {confirmation}
          </div>
        )}
      </div>
    </div>
  );
}
