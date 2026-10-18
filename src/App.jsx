import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WebsiteDevService from './components/WebsiteDevService';
import TenderManagementService from './components/TenderManagementService';
import CustomSoftwareService from './components/CustomSoftwareService';
import AiAutomationService from './components/AiAutomationService';
import CombinedSolutions from './components/CombinedSolutions';
import IndustriesServed from './components/IndustriesServed';
import WorkShowcase from './components/WorkShowcase';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeService, setActiveService] = useState('End-to-End Tender Management');

  const handleSelectService = (serviceName) => {
    setActiveService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#191C21] flex flex-col font-sans selection:bg-[#B84C2A] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Single-Page Website */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectService={handleSelectService} />

        {/* About Neudact Engineers */}
        <AboutSection />

        {/* Service 1: Website Design & Development */}
        <WebsiteDevService onSelectService={handleSelectService} />

        {/* Service 2: End-to-End Tender Management & Bid Support */}
        <TenderManagementService onSelectService={handleSelectService} />

        {/* Service 3: Custom Software & Business Applications */}
        <CustomSoftwareService onSelectService={handleSelectService} />

        {/* Service 4: Custom AI Agents & Intelligent Automation */}
        <AiAutomationService onSelectService={handleSelectService} />

        {/* Combined Solutions */}
        <CombinedSolutions onSelectService={handleSelectService} />

        {/* Industries & Business Types We Support */}
        <IndustriesServed />

        {/* Portfolio & Project Demonstrations */}
        <WorkShowcase />

        {/* Technical Capabilities Matrix */}
        <CapabilitiesMatrix />

        {/* Contact Form & Lead Generation */}
        <ContactSection activeService={activeService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
