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

  // Initialize EmailJS
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
      const response = await emailjs.send(
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

      if (response.status === 200) {
        toast({
          title: "Aanvraag Verzonden!",
          description: "We nemen zo snel mogelijk contact met u op.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
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
                  <h3 className="font-bold text-gray-900">Plan uw afspraak</h3>
                  <p className="text-gray-600 text-sm">Kies een moment dat u het beste uitkomt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Uw volledige naam"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="uw.email@voorbeeld.be"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefoonnummer *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0466 18 76 27"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Extra informatie
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschrijf uw situatie..."
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Verstuur Aanvraag'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
