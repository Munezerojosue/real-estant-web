import React from 'react';

const RealEstateMarkets = () => {
  const markets = [
    'The Villages, FL real estate',
    'New York, Real estate',
    'Madera, CA real estate',
    'Fontana, CA real estate',
    'Moreno Valley, CA real estate',
    'Aurora, IL real estate',
    'Perris, CA real estate',
    'Minnesota Lake, MN real estate',
    'Woodbridge, VA real estate',
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-2">Popular Real Estate Markets</h2>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-wrap justify-center gap-3">
        {markets.map((market, index) => (
          <button 
            key={index} 
            className="border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {market}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RealEstateMarkets;
