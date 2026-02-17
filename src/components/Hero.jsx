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
          backgroundImage: 'url(/assets/images/background.png)',
        }}
      >
        <div className="absolute inset-0 bg-slate-700/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
  <div className="max-w-3xl mx-auto">
    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
      PROFESSIONELE
      <br />
      DIEPTEREINIGING
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl">
      CleanTex staat voor zorgvuldige reiniging van zetels, tapijten en auto-interieurs met doeltreffende technieken en kwaliteitsproducten.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
      <Button
        onClick={handleCallClick}
        className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white 
                  px-4 py-3 sm:px-8 sm:py-6 
                  text-sm sm:text-base md:text-lg 
                  font-medium rounded-md transition-all duration-200 hover:scale-105 
                  flex items-center justify-center gap-2"
      >
        <Phone size={18} className="sm:mr-1" />
        Bel Direct
      </Button>
      <Button
        onClick={handleWhatsAppClick}
        variant="outline"
        className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-800 
                  px-4 py-3 sm:px-8 sm:py-6 
                  text-sm sm:text-base md:text-lg 
                  font-medium rounded-md transition-all duration-200 hover:scale-105 
                  flex items-center justify-center gap-2 border-2 border-white"
      >
        <MessageCircle size={18} className="sm:mr-1" />
        WhatsApp
      </Button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-white text-center sm:text-left">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
          <div className="text-sm sm:text-base md:text-base text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
