import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] text-white border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#C25975] to-[#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#1F1B16] flex items-center justify-center shadow-lg">
                <span className="font-serif text-lg font-bold text-[#D4AF37]">B&B</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wide text-white">
                  BALLOONS & BOARDROOM
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                  GRA IKEJA • LAGOS
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Lagos’ premier boutique venue for executive board meetings and bespoke social milestones. Where strategy meets celebration in absolute privacy and refinement.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#C25975] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Experience Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Signature Experiences
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Weddings & Proposals (from ₦350k)
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Corporate Boardrooms (from ₦150k)
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Birthday Soirées (from ₦200k)
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Ceremonies & Showers (from ₦180k)
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Birthdays & Ceremonies (from ₦220k)
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#D4AF37] transition-colors">
                  Private Executive Dinners (from ₦250k)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Visit & Contact Us
            </h4>
            
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="hover:text-[#D4AF37] transition-colors font-medium"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="hover:text-[#D4AF37] transition-colors font-medium"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 pt-1 text-white/60">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white/90 block">Operating Hours:</span>
                  <span>{BUSINESS_INFO.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Balloons & Boardroom. All rights reserved. 10C Ladoke Akintola, G.R.A. Ikeja, Lagos.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
