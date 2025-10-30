import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'TradingView', logo: '📊' },
    { name: 'Smallcase', logo: '💼' },
    { name: 'MCX', logo: '🏛️' },
    { name: 'NSE', logo: '📈' }
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
      <div className="container-custom">
        <h3 className="text-center text-2xl font-bold text-navy mb-8">
          We are backed by
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition">
              <div className="text-4xl">{partner.logo}</div>
              <p className="font-semibold text-navy">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;