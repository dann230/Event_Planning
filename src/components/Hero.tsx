import React from 'react';
import { Sparkles, Calendar, ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Background High-Resolution Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=90')`,
          filter: 'brightness(0.42) contrast(1.1)',
        }}
      />

      {/* Luxury Layered Overlays for Flawless Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/75 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]/90" />

      {/* Gold Dust / Ambient Particle Vignette */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#C25975]/15 blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Boutique Location Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-[0.18em] mb-8 shadow-xl animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Boutique Venue • 10C Ladoke Akintola, GRA Ikeja</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span className="text-white/80">Lagos</span>
        </div>

        {/* Serif Headline (The Hook) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] mb-6 max-w-4xl drop-shadow-lg">
          Where <span className="italic font-light text-[#FDF7E7]">Strategy</span> Meets <span className="gold-gradient-text font-semibold">Celebration.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
          Lagos’ premier boutique venue for executive board meetings and bespoke social milestones.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto mb-10">
          {/* Primary CTA (Deep Rose & Gold Luxury Accent) */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl flex items-center justify-center space-x-3 group border border-[#C25975]/60 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #C25975 0%, #A33A57 50%, #802840 100%)',
              boxShadow: '0 8px 25px -3px rgba(194, 89, 117, 0.45)'
            }}
          >
            <Calendar className="w-4 h-4 text-[#FDF7E7] group-hover:scale-110 transition-transform" />
            <span>Book Your Date</span>
            <ArrowRight className="w-4 h-4 text-[#FDF7E7] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wider bg-white/10 hover:bg-white/20 backdrop-blur-md border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Experiences</span>
          </button>
        </div>

        {/* Quick scroll down indicator */}
        <button 
          onClick={onExploreClick} 
          className="mt-6 inline-flex flex-col items-center text-white/50 hover:text-[#D4AF37] transition-colors group cursor-pointer"
          aria-label="Scroll to experiences"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest mb-1">Discover The Space</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#D4AF37]" />
        </button>

      </div>
    </section>
  );
};
