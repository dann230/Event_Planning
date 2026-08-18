import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = 'Hello Balloons & Boardroom! I am interested in inquiring about booking your venue at 10C Ladoke Akintola, GRA Ikeja.';
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#1A1A1A] text-white rounded-3xl p-5 border border-[#D4AF37]/40 shadow-2xl animate-fadeIn relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center text-xs"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold shadow-md">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Event Concierge</h4>
              <p className="text-[10px] text-[#25D366] flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse mr-1" />
                Online • GRA Ikeja, Lagos
              </p>
            </div>
          </div>

          <p className="text-xs text-white/80 bg-white/5 p-3 rounded-xl border border-white/10 mb-4 leading-relaxed">
            "Hello! Looking for date availability or custom styling for your upcoming boardroom meeting or milestone celebration?"
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+234 904 999 9098)</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute -top-10 right-0 hidden sm:block bg-[#1A1A1A] text-white text-[11px] font-semibold py-1 px-3 rounded-full border border-[#D4AF37]/30 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp • 10C Ladoke Akintola
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none border-2 border-white/20"
          aria-label="Contact via WhatsApp"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-[#1A1A1A] animate-ping" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-[#1A1A1A]" />
              <MessageCircle className="w-7 h-7 fill-white" />
            </>
          )}
        </button>
      </div>

    </div>
  );
};
