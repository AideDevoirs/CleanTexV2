'use client';

import React from 'react';
import { contactInfo, companyConfig } from '../data/mockData';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = companyConfig.name;
  const logo = companyConfig.logo;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-700 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img alt="logo" className="h-16 w-auto sm:h-16" src={logo} />
              <div className="text-lg font-bold tracking-wider">CLEAN TEX</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professionele dieptereiniging voor een frisse levensstijl
            </p>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">BE1034114723</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">CONTACT</h3>
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone size={18} />
                <span className="text-sm">Tel: {contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail size={18} />
                <span className="text-sm">Email: {contactInfo.email}</span>
              </a>
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Instagram size={18} />
                <span className="text-sm">Instagram: {contactInfo.instagram}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">DIENSTEN</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#diensten')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Meubels & Zetels
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#diensten')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Tapijten & Vloerkleden
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#diensten')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Matrassen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#diensten')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Auto-Interieurs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} CleanTex Service. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
