import React from 'react';
import { Sofa, Sparkles, BedDouble, Car } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  sofa: Sofa,
  carpet: Sparkles,
  bed: BedDouble,
  car: Car,
};

const Services = () => {
  return (
    <section id="diensten" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            ONZE DIENSTEN
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professionele reiniging voor elk textiel in uw interieur
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-cyan-50 transition-colors duration-300">
                    <IconComponent
                      size={40}
                      className="text-gray-400 group-hover:text-cyan-500 transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
