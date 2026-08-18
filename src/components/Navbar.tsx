import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onBookClick: () => void;
  onServiceSelect?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        };
        setLagosTime(new Intl.DateTimeFormat('en-US', options).format(now));
      } catch {
        setLagosTime('Lagos GMT+1');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Signature Experiences', href: '#experiences' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Location & FAQs', href: '#location' },
  ];

  return (
    <>
      {/* Top Luxe Notification Bar */}
      <div className="bg-[#141414] text-[#E5D7A3] text-xs py-2 px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 text-xs tracking-wider">
            <span className="inline-flex items-center text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              10C Ladoke Akintola, G.R.A. Ikeja
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline-flex items-center text-white/80">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" />
              Tue – Fri: 09:00 - 17:00 (Open for Weekend Bookings)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
              <span>Lagos Time: <strong className="text-white font-medium">{lagosTime || '10:45 AM'}</strong></span>
            </div>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Hello%20Balloons%20%26%20Boardroom%2C%20I%20would%20like%20to%20inquire%20about%20availability%20for%20an%20event.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#D4AF37]/20' 
            : 'bg-[#181818]/90 backdrop-blur-sm py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="group flex items-center space-x-2.5 sm:space-x-3 text-left">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] bg-[#1F1B16] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif text-base sm:text-lg font-bold text-[#D4AF37] tracking-tight">B&B</span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-xl font-bold tracking-wide text-white group-hover:text-[#F3E5AB] transition-colors leading-tight">
                BALLOONS & BOARDROOM
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                GRA IKEJA • LAGOS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/80 hover:text-[#D4AF37] font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area - Clean on mobile */}
          <div className="flex items-center space-x-2">
            {/* Desktop Only Book Button */}
            <button
              onClick={onBookClick}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-full shadow-lg overflow-hidden group border border-[#C25975]/40"
              style={{
                background: 'linear-gradient(135deg, #C25975 0%, #9E3D56 50%, #802840 100%)',
                boxShadow: '0 4px 15px rgba(194, 89, 117, 0.3)'
              }}
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#FDF7E7]" />
              <span className="font-bold">Book Date</span>
            </button>

            {/* Mobile Menu Button - Sleek & spacious */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-white hover:text-[#D4AF37] bg-white/5 border border-white/15 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/85 backdrop-blur-lg flex flex-col pt-24 pb-8 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-white hover:text-[#D4AF37] py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#D4AF37] text-xs font-sans tracking-widest uppercase">Explore →</span>
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 rounded-full text-center text-sm font-bold uppercase tracking-wider text-white shadow-xl bg-gradient-to-r from-[#C25975] to-[#802840] flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Date</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider text-white bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center space-x-2 hover:bg-[#25D366]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat Direct on WhatsApp (+234 904 999 9098)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
