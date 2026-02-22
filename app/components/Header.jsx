'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { companyConfig } from '../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { name: companyName, logoHome } = companyConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Diensten', href: '#diensten' },
    { label: 'Resultaten', href: '#resultaten' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Instagram', href: 'https://www.instagram.com/cleann_tex/', external: true }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <button
                aria-label={`Aller en haut - ${companyName}`}
                onClick={() => {
                  const element = document.querySelector('#Hero');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-0 m-0 bg-transparent border-0"
              >
                <img
                  alt="CleanTex logo"
                  className="h-24 w-auto sm:h-24 select-none cursor-pointer hover:opacity-90"
                  src={logoHome}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    scrollToSection(e, item.href);
                  }
                }}
                className="text-gray-700 hover:text-cyan-500 transition-colors duration-200 text-sm font-medium"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Gratis Offerte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (!item.external) {
                    scrollToSection(e, item.href);
                  }
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-cyan-500"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-medium"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Gratis Offerte
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
