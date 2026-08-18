import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InquiryForm } from './components/InquiryForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('');
  const [selectedNotesForForm, setSelectedNotesForForm] = useState<string>('');
  const [selectedGuestCount, setSelectedGuestCount] = useState<number | undefined>(undefined);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiences = () => {
    const el = document.getElementById('experiences');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForForm(service.title);
    setSelectedNotesForForm(`I am inquiring about the ${service.title} experience (${service.tagline}). Starting from ${service.startingPrice}.`);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#D4AF37]/30 selection:text-[#1A1A1A]">
      {/* Navigation Header */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section (The Hook) */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreClick={scrollToExperiences}
        />

        {/* 2. Services Section (Our Signature Experiences) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Social Proof (Kind Words from Our Clients) */}
        <TestimonialsSection />

        {/* 4. Interactive Inquiry Form (Plan Your Event) */}
        <InquiryForm
          initialService={selectedServiceForForm}
          initialNotes={selectedNotesForForm}
          initialGuestCount={selectedGuestCount}
        />

        {/* 5. FAQs & Directions */}
        <FAQSection />
      </main>

      {/* Footer & Contact */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
