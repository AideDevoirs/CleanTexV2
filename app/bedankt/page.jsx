'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Clock, Calendar, Sparkles, ArrowLeft, Phone, Mail } from 'lucide-react';

const stappen = [
  {
    nummer: '1',
    titel: 'Aanvraag ontvangen',
    beschrijving: 'Uw aanvraag is succesvol bij ons binnengekomen.',
    status: 'done',
    icon: CheckCircle,
  },
  {
    nummer: '2',
    titel: 'Inspectie & offerte',
    beschrijving: 'Binnen 24 uur neemt een expert contact met u op voor een vrijblijvende offerte op maat.',
    status: 'current',
    icon: Clock,
  },
  {
    nummer: '3',
    titel: 'Reiniging inplannen',
    beschrijving: 'We plannen samen een datum en tijdstip dat u volledig past.',
    status: 'upcoming',
    icon: Calendar,
  },
  {
    nummer: '4',
    titel: 'Professionele reiniging',
    beschrijving: 'Ons team voert de reiniging vakkundig en grondig uit.',
    status: 'upcoming',
    icon: Sparkles,
  },
];

function BedanktContent() {
  const searchParams = useSearchParams();
  const naam = searchParams.get('naam') || '';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div
        className="max-w-3xl w-full mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {/* Header card */}
        <div className="bg-white rounded-lg shadow-sm p-10 mb-6 text-center">
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {naam
              ? <>BEDANKT,<br /><span className="text-cyan-500">{naam.toUpperCase()}!</span></>
              : <>AANVRAAG<br /><span className="text-cyan-500">VERZONDEN!</span></>
            }
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Uw aanvraag is goed ontvangen. We nemen binnen <strong>24 uur</strong> contact met u op voor uw vrijblijvende offerte.
          </p>
        </div>

        {/* Steps card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-tight">
            WAT ZIJN DE VOLGENDE STAPPEN?
          </h2>

          <div className="space-y-0">
            {stappen.map((stap, index) => {
              const Icon = stap.icon;
              const isDone = stap.status === 'done';
              const isCurrent = stap.status === 'current';
              const isLast = index === stappen.length - 1;

              return (
                <div key={stap.nummer} className="flex gap-4">
                  {/* Ligne verticale + cercle */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                      style={{
                        backgroundColor: isDone
                          ? '#06b6d4'
                          : isCurrent
                          ? '#06b6d4'
                          : '#e5e7eb',
                      }}
                    >
                      {isDone ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <span
                          className="font-bold text-sm"
                          style={{ color: isCurrent ? '#fff' : '#9ca3af' }}
                        >
                          {stap.nummer}
                        </span>
                      )}
                    </div>
                    {!isLast && (
                      <div
                        className="w-0.5 flex-1 my-1"
                        style={{
                          backgroundColor: isDone ? '#06b6d4' : '#e5e7eb',
                          minHeight: '24px',
                        }}
                      />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="font-bold text-gray-900"
                        style={{ opacity: isCurrent || isDone ? 1 : 0.5 }}
                      >
                        {stap.titel}
                      </h3>
                      {isCurrent && (
                        <span className="bg-cyan-100 text-cyan-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          Nu aan de beurt
                        </span>
                      )}
                    </div>
                    <p
                      className="text-gray-600 text-sm"
                      style={{ opacity: isCurrent || isDone ? 1 : 0.5 }}
                    >
                      {stap.beschrijving}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact + CTA */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
            HEEFT U DRINGENDE VRAGEN?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0466187627"
              className="flex items-center gap-3 flex-1 p-4 border border-gray-200 rounded-md hover:border-cyan-500 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Bel ons</p>
                <p className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  0466 18 76 27
                </p>
              </div>
            </a>
            <a
              href="mailto:cleantex.2100@gmail.com"
              className="flex items-center gap-3 flex-1 p-4 border border-gray-200 rounded-md hover:border-cyan-500 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Mail ons</p>
                <p className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors text-sm truncate">
                  cleantex.2100@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Terug naar home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar de homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BedanktPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BedanktContent />
    </Suspense>
  );
}