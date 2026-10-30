import React from 'react';
import { ShieldCheck, FileCheck2, Cpu, Lock } from 'lucide-react';

export default function WhyNeudact() {
  const principles = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#B84C2A]" />,
      title: 'Documentation Discipline',
      description: 'Whether it is a 300-page railway tender compliance dossier or a software API specification, every deliverable is clean, structured, and auditable.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1E6B37]" />,
      title: 'Zero Exaggeration',
      description: 'We do not claim manufacturing rights we do not possess or authorizations we have not secured. If we deliver directly, we say so; if we coordinate with partners, you know exactly who and how.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#1A549E]" />,
      title: 'Engineering Rigor over Fluff',
      description: 'We prioritize performance, code cleanliness, and operational uptime over superficial gimmicks. Our tools and solutions are engineered to solve concrete business bottlenecks.'
    },
    {
      icon: <Lock className="w-5 h-5 text-[#A34E1A]" />,
      title: 'Strict Commercial Confidentiality',
      description: 'Your bid prices, tender strategies, vendor contacts, and proprietary business processes remain strictly confidential under bilateral non-disclosure agreements.'
    }
  ];

  return (
    <section id="why-neudact" className="py-20 sm:py-24 border-b border-[#E6E0D5] bg-[#F4EFEA]/40 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#B84C2A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPERATIONAL STANDARDS</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#191C21]">
            Why Work With Neudact
          </h2>
          
          <p className="text-base text-[#525966] leading-relaxed font-sans">
            Businesses and contractors choose Neudact Engineers when they need technical precision, reliable coordination, and disciplined delivery without corporate bureaucracy.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-3"
            >
              <div className="p-2 w-fit rounded bg-[#FBF9F5] border border-[#EAE4D9]">
                {item.icon}
              </div>
              <p className="font-serif text-lg font-medium text-[#191C21]">
                {item.title}
              </p>
              <p className="text-xs text-[#6A7180] leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-white border border-[#E0D8CB] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase">OUR PROMISE</span>
            <p className="font-serif text-xl font-medium text-[#191C21]">
              Every requirement is assessed for real-world viability before quote issuance.
            </p>
            <p className="text-xs text-[#6A7180]">
              If a tender timeline is impossible or an engineering spec requires unavailable clearances, we tell you upfront.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shrink-0 font-sans"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
