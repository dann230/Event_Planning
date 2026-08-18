import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { Sparkles, Users, ArrowUpRight, CheckCircle2, Info } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'weddings' | 'celebrations'>('all');
  const [selectedDetailModal, setSelectedDetailModal] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'corporate') return service.category === 'corporate' || service.category === 'dinner';
    if (activeFilter === 'weddings') return service.id === 'weddings-proposals';
    if (activeFilter === 'celebrations') return service.id === 'birthday-soirees' || service.id === 'ceremonies-showers' || service.id === 'celebrations-milestones';
    return true;
  });

  return (
    <section id="experiences" className="py-24 bg-[#FAF9F6] text-[#1A1A1A] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C25975]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A]/5 border border-[#D4AF37]/40 text-[#996515] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Boutique Curation in GRA Ikeja</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A] tracking-tight mb-4">
            Our Signature <span className="italic font-light text-[#802840]">Experiences</span>
          </h2>

          <p className="text-sm sm:text-base text-[#555] font-normal leading-relaxed max-w-2xl mx-auto">
            From executive board meetings to intimate milestone celebrations, our Ikeja GRA venue provides bespoke styling, seamless hospitality, and acoustic luxury.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1A1A1A] text-[#D4AF37] shadow-md'
                  : 'bg-white text-[#666] border border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              All Experiences ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('corporate')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === 'corporate'
                  ? 'bg-[#1A1A1A] text-[#D4AF37] shadow-md'
                  : 'bg-white text-[#666] border border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              Corporate & Boardrooms
            </button>
            <button
              onClick={() => setActiveFilter('weddings')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === 'weddings'
                  ? 'bg-[#1A1A1A] text-[#D4AF37] shadow-md'
                  : 'bg-white text-[#666] border border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              Weddings & Proposals
            </button>
            <button
              onClick={() => setActiveFilter('celebrations')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === 'celebrations'
                  ? 'bg-[#1A1A1A] text-[#D4AF37] shadow-md'
                  : 'bg-white text-[#666] border border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              Celebration of Birthdays & Ceremonies
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container with Luxury Badge & Price Tag */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1A1A1A]/80 text-[#F3E5AB] backdrop-blur-md border border-[#D4AF37]/40 shadow-md">
                      ✨ {service.badge}
                    </span>
                  </div>
                )}

                {/* Starting Price Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">Starting from</span>
                    <span className="font-serif text-2xl font-bold text-white tracking-tight">{service.startingPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{service.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#802840] transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-[#802840] font-semibold tracking-wide uppercase mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#666] line-clamp-3 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start text-xs text-[#444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
                    }}
                  >
                    <span>Inquire / Book</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedDetailModal(service)}
                    className="p-3 rounded-xl border border-gray-200 hover:border-[#D4AF37] hover:bg-[#F3E5AB]/20 text-[#1A1A1A] transition-colors"
                    title="View Package Specs"
                    aria-label={`View specs for ${service.title}`}
                  >
                    <Info className="w-4 h-4 text-[#802840]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Requests */}
        <div className="mt-16 bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Need a Custom Event Concept?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Have a specific vision for your celebration or summit?
            </h3>
            <p className="text-sm text-white/70 max-w-xl">
              Our lead creative directors and private styling team craft custom color palettes, custom backdrops, and private venue staging.
            </p>
          </div>

          <button
            onClick={() => onSelectService(SERVICES_DATA[0])}
            className="shrink-0 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C25975 0%, #802840 100%)',
            }}
          >
            Request Bespoke Consultation →
          </button>
        </div>

      </div>

      {/* Detail Specs Modal */}
      {selectedDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedDetailModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#1A1A1A] font-bold"
            >
              ✕
            </button>

            <div className="flex items-center space-x-2 text-xs font-bold text-[#802840] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{selectedDetailModal.badge || 'Signature Experience'}</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-2">
              {selectedDetailModal.title}
            </h3>

            <p className="text-sm text-[#D4AF37] font-bold tracking-wide mb-4">
              Starting from {selectedDetailModal.startingPrice} • {selectedDetailModal.capacity}
            </p>

            <img
              src={selectedDetailModal.image}
              alt={selectedDetailModal.title}
              className="w-full h-56 object-cover rounded-2xl mb-6"
            />

            <p className="text-sm text-[#555] leading-relaxed mb-6">
              {selectedDetailModal.description}
            </p>

            <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-gray-100 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-3">
                Included in This Experience Package:
              </h4>
              <ul className="space-y-2.5">
                {selectedDetailModal.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-xs text-[#333]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mr-2.5 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedDetailModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedDetailModal;
                  setSelectedDetailModal(null);
                  onSelectService(s);
                }}
                className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #C25975 0%, #802840 100%)',
                }}
              >
                Inquire This Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
