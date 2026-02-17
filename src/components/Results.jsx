import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import config from '../config/index.json';

const Results = () => {
  const gallery = config.gallery || [];
  const [api, setApi] = useState(null);

  // ensure carousel is centered on load
  useEffect(() => {
    if (!api) return;
    try { api.reInit && api.reInit(); } catch (e) {}
  }, [api]);

  return (
    <section id="resultaten" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            RESULTATEN DIE SPREKEN
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bekijk enkele voorbeelden van ons werk
          </p>
        </div>

        {/* Carousel showing 3 images at once */}
        <div className="relative px-2">
          <Carousel
            opts={{ align: 'start', loop: false }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {gallery.map((item) => (
                <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2">
                  <div className="h-full">
                    <div className="bg-white rounded-lg border border-gray-200 h-full overflow-hidden">
                      <div
                        className="w-full bg-gray-50 flex items-center justify-center"
                        style={{ aspectRatio: '1179/1500', maxHeight: '80vh' }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain block"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Chevron navigation */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-600 hover:text-gray-800 px-3"
            aria-label="Previous results"
          >&lt;</button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-600 hover:text-gray-800 px-3"
            aria-label="Next results"
          >&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Results;
