import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#181818] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-[#C25975]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Social Proof & Prestige</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Kind Words from <span className="gold-gradient-text italic">Our Clients</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            Read authentic experiences from executive directors, celebrants, and event planners who made 10C Ladoke Akintola their venue of choice.
          </p>
        </div>

        {/* Sliding Carousel Card */}
        <div 
          className="relative bg-[#202020] rounded-3xl border border-[#D4AF37]/25 shadow-2xl p-8 sm:p-12 md:p-16 transition-all duration-500 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Watermark Quote Icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-28 h-28 transform rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Star Rating */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#FDF7E7] leading-relaxed max-w-3xl mb-8 min-h-[120px] flex items-center justify-center">
              "{current.quote}"
            </blockquote>

            {/* Client Profile */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-3 shadow-lg">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                {current.clientName}
              </h4>

              <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                {current.role}
              </p>

              <div className="inline-flex items-center space-x-2 text-[11px] text-white/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Booking • {current.event}</span>
              </div>
            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all shadow-md focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6">
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all shadow-md focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 text-center text-white/60 text-xs uppercase tracking-widest">
          <div>
            <span className="font-serif text-xl font-bold text-white block">120+</span>
            <span>Events Hosted</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#D4AF37] block">4.9 / 5.0</span>
            <span>Client Satisfaction</span>
          </div>
          <div className="hidden sm:block text-white/20">•</div>
          <div>
            <span className="font-serif text-xl font-bold text-white block">100%</span>
            <span>Power Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
