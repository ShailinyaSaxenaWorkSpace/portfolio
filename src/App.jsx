import React, { useState, useEffect } from 'react';
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
import ServiceDetailTemplate from './components/ServiceDetailTemplate';
import { SERVICE_PAGES } from './data/servicePagesData';

export default function App() {
  const [activeService, setActiveService] = useState('Tender Management & Procurement Support');
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectService = (serviceName) => {
    setActiveService(serviceName);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Neudact Engineers — Technology, Engineering & Infrastructure Solutions';
  };

  const navigateToService = (slug) => {
    const targetPath = `/services/${slug}`;
    window.history.pushState({}, '', targetPath);
    setCurrentPath(targetPath);
  };

  // Determine if viewing a specific service page
  let activeServiceData = null;
  if (currentPath.startsWith('/services/')) {
    const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
    activeServiceData = SERVICE_PAGES[slug] || null;
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#191C21] flex flex-col font-sans selection:bg-[#B84C2A] selection:text-white">
      {/* Sticky Header Navigation with router support */}
      <Navbar onNavigateHome={navigateToHome} currentRoute={currentPath} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeServiceData ? (
          /* Dedicated Service Page View */
          <ServiceDetailTemplate
            service={activeServiceData}
            onSelectService={handleSelectService}
            onNavigateHome={navigateToHome}
            onNavigateService={navigateToService}
          />
        ) : (
          /* Primary Homepage View */
          <>
            {/* Hero Section with 3D Depth Card & Immediate CTAs */}
            <Hero onSelectService={handleSelectService} />

            {/* About Neudact Engineers */}
            <AboutSection />

            {/* 4 Core Solution Domains (with direct links to dedicated pages) */}
            <CoreSolutions 
              onSelectService={handleSelectService} 
              onNavigateService={navigateToService}
            />

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
          </>
        )}
      </main>

      {/* Footer with Service Directory and Deep Links */}
      <Footer onNavigateHome={navigateToHome} onNavigateService={navigateToService} />
    </div>
  );
}
