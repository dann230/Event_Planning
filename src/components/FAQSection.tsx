import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';
import { ChevronDown, HelpCircle, MapPin, Sparkles, Navigation } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="location" className="py-24 bg-[#FAF9F6] text-[#1A1A1A] relative border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Location & Arrival Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A]/5 border border-[#D4AF37]/40 text-[#996515] text-xs font-semibold uppercase tracking-[0.2em]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Location & Access</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Quiet Prestige in <span className="italic text-[#802840]">G.R.A. Ikeja</span>
            </h2>

            <p className="text-sm text-[#555] leading-relaxed">
              Situated on tree-lined Ladoke Akintola Street, our boutique venue is shielded from commercial noise while remaining effortlessly connected to key Lagos hubs.
            </p>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E0D8] shadow-lg space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Balloons & Boardroom</h4>
                  <p className="text-xs text-[#666] mt-0.5">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#555]">
                <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-gray-100">
                  <span className="font-bold text-[#1A1A1A] block">12 Mins</span>
                  <span>Murtala Muhammed Airport</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-gray-100">
                  <span className="font-bold text-[#1A1A1A] block">5 Mins</span>
                  <span>Maryland Mall & Mobolaji Bank Anthony</span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Open in Google Maps / Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: FAQs Accordion (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#802840] block mb-1">
                Frequently Asked Questions
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Everything you need to know before booking.
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-[#E5E0D8] overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#802840] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-[#555] leading-relaxed border-t border-gray-100 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
