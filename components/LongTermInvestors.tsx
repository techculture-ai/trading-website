import React from 'react';
import { FaChartPie, FaCoins, FaShieldAlt, FaFileInvoiceDollar } from 'react-icons/fa';

const LongTermInvestors = () => {
  const features = [
    {
      icon: <FaChartPie />,
      title: 'Mutual Funds',
      description: 'Invest in 2000+ mutual funds with zero commission'
    },
    {
      icon: <FaCoins />,
      title: 'Stocks & ETFs',
      description: 'Build long-term wealth with equity investments'
    },
    {
      icon: <FaShieldAlt />,
      title: 'IPO Investment',
      description: 'Apply to IPOs directly from your Ezwealth account'
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Smallcase Ready',
      description: 'Invest in curated portfolios with Smallcase'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg p-8 aspect-square"></div>
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy">
              Built For Long-Term Investors
            </h2>
            
            <p className="text-xl text-gray-600">
              Everything you need to build and manage your investment portfolio for the long run
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl text-accent-orange mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTermInvestors;