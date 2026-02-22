'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('OT2zf8nW_mXJjq6V9');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Try backend API first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Aanvraag Verzonden!",
          description: "We nemen zo snel mogelijk contact met u op.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Backend API failed');
      }
    } catch (error) {
      console.error('API error, falling back to EmailJS:', error);
      
      // Fallback to EmailJS
      try {
        const emailResponse = await emailjs.send(
          'service_xrdardf',
          'template_wwt8z7z',
          {
            to_email: 'cleantex.2100@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message || 'Pas de détails supplémentaires',
          }
        );

        if (emailResponse.status === 200) {
          toast({
            title: "Aanvraag Verzonden!",
            description: "We nemen zo snel mogelijk contact met u op.",
          });
          setFormData({ name: '', email: '', phone: '', message: '' });
        }
      } catch (emailError) {
        console.error('EmailJS error:', emailError);
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              VRAAG UW GRATIS
              <br />
              OFFERTE AAN
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende
              offerte op maat voor uw reinigingsbehoeften.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Vertel ons uw situatie</h3>
                  <p className="text-gray-600 text-sm">Beschrijf wat u wenst te laten reinigen</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Ontvang uw offerte</h3>
                  <p className="text-gray-600 text-sm">Binnen 24 uur een duidelijke prijsindicatie</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Geniessen van het resultaat</h3>
                  <p className="text-gray-600 text-sm">Professionele reiniging op uw moment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Volledige Naam
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan Jansen"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  E-mailadres
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jan@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Telefoonnummer
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0466 18 76 27"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Bericht
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschrijf uw reinigingsbehoeften..."
                  className="w-full min-h-24"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-md transition-colors"
              >
                {isLoading ? 'Verzenden...' : 'Gratis Offerte Aanvragen'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
