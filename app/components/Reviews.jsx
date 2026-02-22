'use client';

import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Star } from 'lucide-react';
import { reviews } from '../data/mockData';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);
    handleSelect();

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 select-none pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            KLANTENREVIEWS
          </h2>
          <div className="inline-block mb-4">
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-8 md:px-16 lg:px-20">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  {/* Review Card */}
                  <div className="h-full flex flex-col">
                    <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4 pointer-events-none">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                        ))}
                      </div>

                      {/* Quote Mark */}
                      <div className="mb-2 pointer-events-none">
                        <span className="text-4xl text-cyan-500/20 font-serif">"</span>
                      </div>

                      {/* Comment */}
                      <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed italic select-none pointer-events-none flex-1">
                        {review.comment}
                      </p>

                      {/* Author Info - Name Only */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base select-none pointer-events-none">{review.name}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Chevron Navigation */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-5xl text-cyan-500 hover:text-cyan-600 transition-colors font-bold hover:scale-125 transition-transform"
            aria-label="Previous review"
          >
            &lt;
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-5xl text-cyan-500 hover:text-cyan-600 transition-colors font-bold hover:scale-125 transition-transform"
            aria-label="Next review"
          >
            &gt;
          </button>
        </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-500 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

        
      </div>
    </section>
  );
};

export default Reviews;