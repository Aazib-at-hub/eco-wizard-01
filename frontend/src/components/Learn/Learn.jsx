import React from 'react';

const facts = [
  {
    title: "Unpopular Thought",
    content: "Banning plastic bags won't help much if we keep buying fast fashion and e-waste weekly.",
  },
  {
    title: "Eco Fact",
    content: "One mature tree absorbs 48 pounds of CO₂ every year — and cools the air like 10 ACs running for 20 hours.",
  },
  {
    title: "Unpopular Thought",
    content: "Using a bicycle might be more sustainable than switching to an electric car in urban India.",
  },
  {
    title: "Eco Fact",
    content: "If every Indian used a reusable bottle, we’d eliminate over 1.5 billion plastic bottles annually.",
  },
];

const Learn = () => {
  return (
    <div className='h-screen'>
    <div className="relative top-20 bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto font-[Manrope] mt-10">
      <h2 className="text-[32px] text-black font-bold mb-6 ">Fun Facts Corner 🌱</h2>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-[#F7FAFC] rounded-xl p-4 shadow-sm"
          >
            <h3 className="text-[28px] text-[#2F855A] font-semibold">{fact.title}</h3>
            <p className="text-[18px] text-gray-600 mt-1">{fact.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Learn;