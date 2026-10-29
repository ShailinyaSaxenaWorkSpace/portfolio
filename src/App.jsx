import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoreSolutions from './components/CoreSolutions';
import FeaturedProducts from './components/FeaturedProducts';
import DeliveryModel from './components/DeliveryModel';
import WorkShowcase from './components/WorkShowcase';
import IndustriesServed from './components/IndustriesServed';
import WhyNeudact from './components/WhyNeudact';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeService, setActiveService] = useState('Tender Management & Procurement Support');

  const handleSelectService = (serviceName) => {
    setActiveService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#191C21] flex flex-col font-sans selection:bg-[#B84C2A] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Single-Page Website */}
      <main className="flex-1">
        {/* Hero Section with 3D Depth Card & Immediate CTAs */}
        <Hero onSelectService={handleSelectService} />

        {/* About Neudact Engineers */}
        <AboutSection />

        {/* 4 Core Solution Domains (7 Services with Delivery Model Badges) */}
        <CoreSolutions onSelectService={handleSelectService} />

        {/* Featured Products: IREPS Tender Harvester & NAYAN Vision Suite */}
        <FeaturedProducts onSelectService={handleSelectService} />

        {/* Delivery Model Transparency (Direct, Specialist Partner, Sourced) */}
        <DeliveryModel />

        {/* Selected Work & Verified Internal Tools */}
        <WorkShowcase />

        {/* 8 Target Industries Served */}
        <IndustriesServed />

        {/* Why Neudact: Operational Rigor & Standards */}
        <WhyNeudact />

        {/* Technical Capabilities Matrix */}
        <CapabilitiesMatrix />

        {/* Contact Form & Quotation Specification */}
        <ContactSection activeService={activeService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
