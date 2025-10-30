import React from 'react';
import { FaHeadset, FaLock, FaClock } from 'react-icons/fa';

const AlwaysKeepingFirst = () => {
  const features = [
    {
      icon: <FaHeadset />,
      title: 'No Hold',
      description: 'No holding in a customer service line'
    },
    {
      icon: <FaLock />,
      title: 'No Spam Or Unsolicited Calls',
      description: 'We respect your privacy'
    },
    {
      icon: <FaClock />,
      title: 'We Reply Swiftly',
      description: 'Quick resolution to your queries'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy">
              Always Keeping You First
            </h2>
            
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
              Contact Support
            </button>
          </div>
          
          {/* Right Content - Image */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-8 aspect-video"></div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysKeepingFirst;