import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, User, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/mockData';
import { BookingFormState } from '../types';

interface InquiryFormProps {
  initialService?: string;
  initialNotes?: string;
  initialGuestCount?: number;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialService,
  initialNotes,
  initialGuestCount
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    serviceType: 'Corporate',
    estimatedBudget: '₦150k - ₦300k',
    guestCount: initialGuestCount || 25,
    timeSlot: 'Full Day & Evening (09:00 - 22:00)',
    message: initialNotes || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('wedding') || initialService.toLowerCase().includes('proposal')) {
        setFormData(prev => ({ ...prev, serviceType: 'Wedding' }));
      } else if (initialService.toLowerCase().includes('corporate') || initialService.toLowerCase().includes('boardroom')) {
        setFormData(prev => ({ ...prev, serviceType: 'Corporate' }));
      } else if (initialService.toLowerCase().includes('birthday')) {
        setFormData(prev => ({ ...prev, serviceType: 'Birthday' }));
      } else if (initialService.toLowerCase().includes('ceremon') || initialService.toLowerCase().includes('shower') || initialService.toLowerCase().includes('celebration')) {
        setFormData(prev => ({ ...prev, serviceType: 'Ceremony' }));
      } else {
        setFormData(prev => ({ ...prev, serviceType: 'Other' }));
      }
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData(prev => ({ ...prev, message: initialNotes }));
    }
  }, [initialNotes]);

  useEffect(() => {
    if (initialGuestCount) {
      setFormData(prev => ({ ...prev, guestCount: initialGuestCount }));
    }
  }, [initialGuestCount]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.eventDate) errors.eventDate = 'Please select your preferred date';
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone/WhatsApp number';
    } else if (formData.phone.length < 8) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `BB-GRA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#C25975', '#F3E5AB', '#FFFFFF']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  const getWhatsAppBookingLink = () => {
    const text = `*New Reservation Inquiry (Ref: ${bookingRef || 'Direct'})*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📅 *Date:* ${formData.eventDate}\n` +
      `✨ *Service:* ${formData.serviceType}\n` +
      `💰 *Budget:* ${formData.estimatedBudget}\n` +
      `👥 *Guests:* ${formData.guestCount}\n` +
      `🕒 *Slot:* ${formData.timeSlot}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📝 *Special Requests:* ${formData.message || 'None'}\n\n` +
      `_Sent from Balloons & Boardroom (GRA Ikeja) Portal_`;
    return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <section id="booking-form" className="py-24 bg-[#141414] text-white relative overflow-hidden">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#C25975]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>GRA Ikeja Calendar</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
              Plan Your <span className="gold-gradient-text italic">Event.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Reserve your preferred date at 10C Ladoke Akintola, G.R.A. Ikeja. Our dedicated event coordinator will verify date availability and confirm your reservation promptly.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-white/80">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white text-xs font-semibold">10C Ladoke Akintola, GRA Ikeja</strong>
                  <span className="text-white/50">Exclusive boutique venue with gated perimeter & private parking</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white text-xs font-semibold">Operating & Booking Hours</strong>
                  <span className="text-white/50">Tue – Fri: 09:00 - 17:00 (Open for weekend bookings)</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <strong className="block text-white text-xs font-semibold">Fast Response Guarantee</strong>
                  <span className="text-white/50">Direct verification from our Senior Event Coordinator</span>
                </div>
              </div>
            </div>

            {/* Direct Quick WhatsApp Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#141414] border border-[#D4AF37]/30 shadow-lg">
              <p className="text-xs text-white/60 mb-2 font-medium">Need immediate date confirmation for an event?</p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Hello%20Balloons%20%26%20Boardroom%2C%20I%20need%20date%20availability%20for%20an%20event%20at%20GRA%20Ikeja.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat directly on WhatsApp: +234 904 999 9098 →</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1C1C] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-2xl relative">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Plan Your Event
                    </h3>
                    <p className="text-xs text-white/50">
                      Fill out the details below to check availability and lock your date.
                    </p>
                  </div>

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bolanle Adeleke / Dr. Ibrahim"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/30 focus:outline-none transition-all ${
                          validationErrors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                    </div>
                    {validationErrors.fullName && (
                      <p className="text-rose-400 text-xs mt-1">{validationErrors.fullName}</p>
                    )}
                  </div>

                  {/* 2-Column: Event Date & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Event Date (Date Picker) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Event Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          min={minDateStr}
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className={`w-full px-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white focus:outline-none transition-all [color-scheme:dark] ${
                            validationErrors.eventDate ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-[#D4AF37]'
                          }`}
                        />
                      </div>
                      {validationErrors.eventDate && (
                        <p className="text-rose-400 text-xs mt-1">{validationErrors.eventDate}</p>
                      )}
                    </div>

                    {/* Service Type Dropdown: Wedding, Corporate, Birthday, Ceremony, Other */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Service Type *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Wedding" className="bg-[#1C1C1C] text-white">Wedding & Proposal</option>
                        <option value="Corporate" className="bg-[#1C1C1C] text-white">Corporate Boardroom / AGM</option>
                        <option value="Birthday" className="bg-[#1C1C1C] text-white">Birthday Soirée (30th, 40th, 50th)</option>
                        <option value="Ceremony" className="bg-[#1C1C1C] text-white">Ceremony & Shower (Bridal / Baby / Milestone)</option>
                        <option value="Other" className="bg-[#1C1C1C] text-white">Other Bespoke Event</option>
                      </select>
                    </div>

                  </div>

                  {/* 2-Column: Estimated Budget & Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Estimated Budget (Dropdown with affordable tiers) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Estimated Budget (₦) *
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="₦150k - ₦300k" className="bg-[#1C1C1C] text-white">₦150,000 - ₦300,000</option>
                        <option value="₦300k - ₦700k" className="bg-[#1C1C1C] text-white">₦300,000 - ₦700,000</option>
                        <option value="₦700k - ₦1.5M" className="bg-[#1C1C1C] text-white">₦700,000 - ₦1,500,000</option>
                        <option value="₦1.5M+" className="bg-[#1C1C1C] text-white">₦1,500,000+ (Full Venue Buyout)</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Estimated Guests (Cap: 80)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={80}
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                        placeholder="e.g. 25"
                      />
                    </div>

                  </div>

                  {/* 2-Column: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/30 focus:outline-none transition-all ${
                            validationErrors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-[#D4AF37]'
                          }`}
                        />
                      </div>
                      {validationErrors.phone && (
                        <p className="text-rose-400 text-xs mt-1">{validationErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="client@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/30 focus:outline-none transition-all ${
                            validationErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/15 focus:border-[#D4AF37]'
                          }`}
                        />
                      </div>
                      {validationErrors.email && (
                        <p className="text-rose-400 text-xs mt-1">{validationErrors.email}</p>
                      )}
                    </div>

                  </div>

                  {/* Message / Special Requests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your balloon color palette preferences, catering requirements, AV needs, or any specific theme ideas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button: 'Check Availability' */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 border border-[#C25975]/60 disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #C25975 0%, #A33A57 50%, #802840 100%)',
                      boxShadow: '0 8px 25px rgba(194, 89, 117, 0.4)'
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Checking Ikeja GRA Calendar...</span>
                      </span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-[#FDF7E7]" />
                        <span>Check Availability</span>
                        <ArrowRight className="w-4 h-4 text-[#FDF7E7]" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-white/40">
                    🔒 Strictly confidential. We respect your privacy. No spam.
                  </p>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-400 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
                      Inquiry Received • Ref: {bookingRef}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">
                      Your Date is Being Verified!
                    </h3>
                    <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your request for <strong className="text-[#D4AF37]">{formData.eventDate}</strong> ({formData.serviceType} experience).
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-white/70">
                      <span>Venue:</span>
                      <strong className="text-white">10C Ladoke Akintola, GRA Ikeja</strong>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Selected Service:</span>
                      <span className="text-white">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Budget Tier:</span>
                      <span className="text-[#D4AF37]">{formData.estimatedBudget}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Estimated Guests:</span>
                      <span className="text-white">{formData.guestCount} Guests</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Fast Track */}
                  <div className="space-y-3 max-w-md mx-auto">
                    <a
                      href={getWhatsAppBookingLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-xl bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Fast-Track on WhatsApp (+234 904 999 9098)</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          eventDate: '',
                          serviceType: 'Corporate',
                          estimatedBudget: '₦150k - ₦300k',
                          guestCount: 25,
                          timeSlot: 'Full Day & Evening (09:00 - 22:00)',
                          message: '',
                        });
                      }}
                      className="w-full py-3 rounded-full text-xs text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                    >
                      Submit Another Date or Inquiry
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
