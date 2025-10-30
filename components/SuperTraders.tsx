import React from 'react';
import { FaChartLine, FaBolt, FaRocket, FaMobileAlt } from 'react-icons/fa';

const SuperTraders = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: 'Super ANT',
      description: 'Advanced trading terminal with multiple order types'
    },
    {
      icon: <FaBolt />,
      title: 'Forever Free',
      description: 'Zero brokerage on equity delivery trades'
    },
    {
      icon: <FaRocket />,
      title: 'Super Fast',
      description: 'Lightning fast order execution in milliseconds'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Trade on Charts',
      description: 'Place orders directly from TradingView charts'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Built For Super Traders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced tools and features designed for active traders who demand speed, precision, and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl text-accent-orange">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 aspect-video"></div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-navy">
              Trade Like a Pro
            </h3>
            <p className="text-gray-600 text-lg">
              Access institutional-grade trading tools and features that give you the edge in the market.
            </p>
            <button className="btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperTraders;