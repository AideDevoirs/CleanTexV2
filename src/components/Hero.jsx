import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { stats } from '../data/mockData';

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:0466187627';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/32466187627', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-slate-700/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            PROFESSIONELE
            <br />
            DIEPTEREINIGING
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            CleanTex staat voor zorgvuldige reiniging van zetels, tapijten en
            auto-interieurs met doeltreffende technieken en kwaliteitsproducten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              onClick={handleCallClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Bel Direct
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-6 text-lg font-medium rounded-md transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 border-2 border-white"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
