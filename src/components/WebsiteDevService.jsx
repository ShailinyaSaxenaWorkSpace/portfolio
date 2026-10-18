import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WebsiteDevService({ onSelectService }) {
  const websiteOfferings = [
    {
      title: 'Corporate & Business Websites',
      description: 'Authoritative websites tailored for established companies, EPC contractors, and engineering firms that require credible presentation for clients and institutional partners.'
    },
    {
      title: 'Company Profile Websites',
      description: 'Structured corporate profiles presenting organizational capabilities, machinery inventories, past project portfolios, and compliance credentials.'
    },
    {
      title: 'Professional Service Websites',
      description: 'Specialist service pages engineered to explain technical services clearly, establish industry authority, and convert corporate visitors into qualified inquiries.'
    },
    {
      title: 'Landing Pages & Lead Generation',
      description: 'High-conversion, single-purpose landing pages built with fast loading speeds, concise value propositions, and friction-free inquiry forms.'
    },
    {
      title: 'Portfolio & Showcase Websites',
      description: 'Curated technical portfolios and project galleries designed to showcase completed infrastructure, engineering works, or digital systems.'
    },
    {
      title: 'Responsive & Mobile-First Websites',
      description: 'Adaptive interfaces optimized across mobile smartphones, tablets, laptops, and ultra-wide desktop displays with zero layout breakage.'
    },
    {
      title: 'Website Redesign & Modernization',
      description: 'Complete overhaul of outdated or slow websites — restructuring content hierarchy, upgrading performance, and removing generic template bloat.'
    },
    {
      title: 'Contact Forms & Inquiry Integrations',
      description: 'Secure, spam-protected inquiry forms integrated directly with email notifications, WhatsApp alerts, CRM webhooks, or spreadsheet logs.'
    },
    {
      title: 'Deployment & Maintenance Support',
      description: 'Production deployment to reliable modern infrastructure (Netlify, Vercel, VPS, or cloud hosts) with HTTPS certificates and ongoing updates.'
    },
    {
      title: 'API & Third-Party Integrations',
      description: 'Seamless integration of third-party tools, payment gateways, analytics, mapping services, document downloads, and custom backend endpoints.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understand Business & Objectives',
      description: 'We analyze your target market, key client types, operational strengths, and the specific action you want website visitors to take.'
    },
    {
      step: '02',
      title: 'Plan Structure & Content Hierarchy',
      description: 'We structure the information architecture, outline section flows, and refine professional copy that speaks directly to business decision-makers.'
    },
    {
      step: '03',
      title: 'Design Interface & User Experience',
      description: 'We craft a clean, editorial visual identity with refined typography, balanced spacing, and purposeful visual cues — avoiding artificial AI-generated clutter.'
    },
    {
      step: '04',
      title: 'Develop, Optimize & Test',
      description: 'We engineer the website using modern frontend code (React, Tailwind CSS, Vite) ensuring sub-second load times, cross-device responsiveness, and accessibility.'
    },
    {
      step: '05',
      title: 'Deploy & Provide Agreed Support',
      description: 'We launch your website on fast, secure infrastructure, configure domain routing, test form deliveries, and provide agreed maintenance support.'
    }
  ];

  const handleBuildWebsiteCTA = () => {
    if (onSelectService) {
      onSelectService('Website Development');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="websites" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 01 · Service One
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Website Design &amp; Development
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#4E5564] leading-relaxed">
              We build professional websites that establish immediate credibility, explain complex services with clarity, and generate qualified business enquiries. Every site is custom-engineered for performance, readability, and long-term maintainability.
            </p>
            <div className="pt-2">
              <button
                onClick={handleBuildWebsiteCTA}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
              >
                <span>Build Your Website</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE4D9]">
            <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
              Website Solutions &amp; Scope
            </span>
            <span className="font-mono text-[11px] text-[#7A8190]">
              Custom Engineering · Zero Generic Templates
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white border border-[#E0D8CB] rounded space-y-2.5 hover:border-[#191C21]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B84C2A]" />
                  <h3 className="font-serif text-base font-medium text-[#191C21]">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#555C6A] leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Execution Process */}
        <div className="p-8 sm:p-10 bg-white border border-[#DDD5C7] rounded-lg space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#EAE4D9]">
            <div>
              <span className="font-mono text-xs font-bold text-[#B84C2A] block">
                DELIVERY METHODOLOGY
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#191C21] pt-1">
                Our 5-Step Website Development Process
              </h3>
            </div>
            <span className="text-xs font-mono text-[#7A8190]">
              Structured · Predictable · Documented
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#191C21] block pb-2 border-b border-[#EAE4D9]">
                  STAGE {step.step}
                </span>
                <h4 className="font-serif text-base font-medium text-[#191C21]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#525966] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAE4D9] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5A606E]">
            <span className="font-mono text-[11px] text-[#7A8190]">
              Technology Stack: Modern React 19, Semantic HTML5, Tailwind CSS, Vite, Cloud Delivery
            </span>
            <button
              onClick={handleBuildWebsiteCTA}
              className="inline-flex items-center gap-1.5 font-medium text-[#B84C2A] hover:underline"
            >
              <span>Start your website requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
