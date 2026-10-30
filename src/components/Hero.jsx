import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, MapPin, Clock, ShieldCheck, Cpu, Sun, Network, Radio } from 'lucide-react';

export default function Hero({ onSelectService }) {
  const [istTime, setIstTime] = useState('');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
        setIstTime(`${formatted} IST`);
      } catch {
        setIstTime('IST');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Restrained subtle tilt (max ~6 deg)
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleDiscussRequirement = () => {
    if (onSelectService) {
      onSelectService('Multi-Disciplinary / Turnkey Project');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePillarClick = (categoryName) => {
    if (onSelectService) {
      onSelectService(categoryName);
    }
    const target = document.getElementById('solutions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E6E0D5] bg-[#FBF9F5] overflow-hidden">
      {/* Subtle blueprint decorative background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Docket / Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-10 border-b border-[#EAE4D9] text-xs font-mono text-[#6A7180]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B84C2A] animate-pulse" />
            <span className="font-semibold text-[#191C21]">NEUDACT ENGINEERS</span>
            <span className="text-[#A5ACB9]">/</span>
            <span>WHERE INTELLIGENCE MEETS EXECUTION</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#B84C2A]" />
              Gurugram, Haryana, India
            </span>
            <span className="hidden sm:inline-block text-[#C2BBAF]">|</span>
            <span className="hidden sm:flex items-center gap-1.5 font-mono">
              <Clock className="w-3 h-3 text-[#7A8190]" />
              {istTime || 'IST'}
            </span>
          </div>
        </div>

        {/* Main Grid: Left Copy & Right 3D Engineering Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Headline, Positioning, CTAs) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F2ECE3] border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#B84C2A]">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECHNOLOGY · ENGINEERING · INFRASTRUCTURE</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#191C21] leading-[1.1]">
                Engineering &amp; Technology Solutions for Businesses
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#3A404D]">
                Build Better. Bid Smarter. Automate More.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#525966] leading-relaxed max-w-2xl font-sans">
              An engineering and technology solutions partner providing direct digital services, project coordination, product sourcing, and specialist partner-delivered solutions for businesses, infrastructure companies, EPC contractors, and government-facing organizations.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={handleDiscussRequirement}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-sans text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm cursor-pointer"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded font-sans text-xs font-semibold text-[#191C21] hover:bg-[#F2ECE3] border border-[#DDD7CC] transition-colors"
              >
                <span>Explore Solutions</span>
              </a>

              <a
                href="/Neudact_Engineers_Capabilities_Brochure.pdf"
                download="Neudact_Engineers_Capabilities_Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#575D6A] hover:text-[#B84C2A] transition-colors"
                title="Download Capabilities Brochure (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-[#B84C2A]" />
                <span className="underline underline-offset-4">Capabilities Brochure (PDF)</span>
              </a>
            </div>

            {/* Quick trust docket */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A8190]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E6B37]" />
                Transparent Delivery Models
              </span>
              <span>•</span>
              <span>Statutory Compliance Checked</span>
              <span>•</span>
              <span>No Exaggerated Claims</span>
            </div>
          </div>

          {/* Right Column: 3D Perspective Engineering Schematic Card */}
          <div className="lg:col-span-5 perspective-container">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative p-6 sm:p-7 bg-white rounded-lg border border-[#DDD7CC] shadow-[0_12px_36px_rgba(25,28,33,0.08)] preserve-3d"
            >
              {/* Card Header Docket */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE9DF] text-[11px] font-mono text-[#7A8190]">
                <span className="flex items-center gap-1.5 font-bold text-[#191C21]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E6B37]" />
                  SYSTEM CAPABILITIES MATRIX
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#A5ACB9]">v2.6 ARCHITECTURE</span>
              </div>

              {/* Layer 1: Operational Nodes */}
              <div className="mt-5 space-y-3">
                <div className="p-3 rounded bg-[#FBF9F5] border border-[#EAE4D9] flex items-start gap-3 hover:border-[#B84C2A] transition-colors">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#B84C2A]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#191C21]">Technology &amp; Digital</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <p className="text-[11px] text-[#6A7180] mt-0.5">Custom software, AI agents &amp; automated workflows.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#FBF9F5] border border-[#EAE4D9] flex items-start gap-3 hover:border-[#B84C2A] transition-colors">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#1A549E]">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#191C21]">Solar &amp; Renewable Energy</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
                    </div>
                    <p className="text-[11px] text-[#6A7180] mt-0.5">Plant SLD design, BoS accessories &amp; sourcing coordination.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#FBF9F5] border border-[#EAE4D9] flex items-start gap-3 hover:border-[#B84C2A] transition-colors">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#B84C2A]">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#191C21]">Tender &amp; Procurement</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <p className="text-[11px] text-[#6A7180] mt-0.5">IREPS Harvester, NIT analysis &amp; bid documentation.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#FBF9F5] border border-[#EAE4D9] flex items-start gap-3 hover:border-[#B84C2A] transition-colors">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#A34E1A]">
                    <Network className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#191C21]">Security, CCTV &amp; Telecom</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-sourced font-medium">Sourced &amp; Partner</span>
                    </div>
                    <p className="text-[11px] text-[#6A7180] mt-0.5">VMS, fiber infrastructure &amp; commercial drone sourcing.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-5 pt-4 border-t border-[#EFE9DF] flex items-center justify-between text-[11px] font-mono text-[#6A7180]">
                <span>Rigorous Documentation</span>
                <span className="text-[#B84C2A] font-semibold">Zero Vendor Lock-in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Four Core Service Divisions Bar */}
        <div className="mt-14 pt-10 border-t border-[#EAE4D9]">
          <div className="flex items-center justify-between pb-4 mb-6">
            <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
              Four Core Solution Groups
            </span>
            <span className="font-mono text-[11px] text-[#7A8190]">
              Click to jump to specifications
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Division 1: Technology & Digital */}
            <div
              onClick={() => handlePillarClick('Software, Web Development & Automation')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group depth-card"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">01 / DIGITAL</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                Technology &amp; Digital Solutions
              </p>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Websites, custom SaaS tools, AI workflow automations &amp; data integration pipelines.
              </p>
              <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
            </div>

            {/* Division 2: Tender & Procurement */}
            <div
              onClick={() => handlePillarClick('Tender Management & Procurement Support')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group depth-card"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">02 / PROCUREMENT</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                Tender &amp; Procurement Support
              </p>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Eligibility audit, bid document preparation, Excel pricing review &amp; IREPS Tender Harvester.
              </p>
              <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
            </div>

            {/* Division 3: Renewable & Engineering */}
            <div
              onClick={() => handlePillarClick('Solar & Renewable Energy Solutions')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group depth-card"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#1A549E]">03 / ENERGY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#1A549E] transition-colors">
                Solar &amp; Renewable Energy
              </p>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Solar Single Line Diagrams (SLD) via licensed partners, BoS accessories &amp; telecom links.
              </p>
              <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
            </div>

            {/* Division 4: Security & Infrastructure */}
            <div
              onClick={() => handlePillarClick('Security, CCTV & VMS')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group depth-card"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#A34E1A]">04 / SECURITY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#A34E1A] transition-colors">
                Security, CCTV &amp; Emerging Tech
              </p>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                VMS surveillance, enterprise routing, commercial drone sourcing &amp; defence engineering.
              </p>
              <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded badge-sourced font-medium">Sourced &amp; Partner</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
