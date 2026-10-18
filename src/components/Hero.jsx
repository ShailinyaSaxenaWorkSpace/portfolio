import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, MapPin, Clock } from 'lucide-react';

export default function Hero({ onSelectService }) {
  const [istTime, setIstTime] = useState('');

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

  const handleDiscussProjectCTA = () => {
    if (onSelectService) {
      onSelectService('Combined Services');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceName, sectionId) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E6E0D5] bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Docket / Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-10 border-b border-[#EAE4D9] text-xs font-mono text-[#6A7180]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B84C2A]" />
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

        {/* Main Headline & Supporting Copy */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#B84C2A] uppercase tracking-wider block">
              TECHNOLOGY · TENDER MANAGEMENT · AUTOMATION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#191C21] leading-[1.12]">
              Build Better. Bid Smarter. Automate More.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#525966] leading-relaxed max-w-3xl font-sans">
            From professional websites and custom business software to complete tender-management support and AI-powered automation, Neudact Engineers helps businesses turn complex requirements into practical solutions.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={handleDiscussProjectCTA}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-sans text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
            </button>

            <a
              href="#websites"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded font-sans text-xs font-semibold text-[#191C21] hover:bg-[#F2ECE3] border border-[#DDD7CC] transition-colors"
            >
              <span>Explore Our Services</span>
            </a>

            <a
              href="/Shailinya_Saxena_Resume.pdf"
              download="Shailinya_Saxena_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#575D6A] hover:text-[#B84C2A] transition-colors"
              title="Download verified resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#B84C2A]" />
              <span className="underline underline-offset-4">Download Résumé (PDF)</span>
            </a>
          </div>
        </div>

        {/* Four Core Pillars Overview */}
        <div className="mt-14 pt-10 border-t border-[#EAE4D9]">
          <div className="flex items-center justify-between pb-4 mb-6">
            <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
              Four Core Service Divisions
            </span>
            <span className="font-mono text-[11px] text-[#7A8190]">
              Select any division to explore details
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Division 1: Websites */}
            <div
              onClick={() => handleServiceClick('Website Development', 'websites')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">01 / WEB</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                Website Design &amp; Development
              </h3>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Corporate profiles, service pages &amp; high-conversion websites engineered for speed and credibility.
              </p>
            </div>

            {/* Division 2: Tender Management */}
            <div
              onClick={() => handleServiceClick('End-to-End Tender Management', 'tender-management')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">02 / TENDERS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                End-to-End Tender Management
              </h3>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                From discovery and NIT analysis to compliance matrices, portal submission &amp; post-bid support.
              </p>
            </div>

            {/* Division 3: Custom Software */}
            <div
              onClick={() => handleServiceClick('Custom Software Development', 'custom-software')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">03 / SOFTWARE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                Custom Software &amp; Applications
              </h3>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Tailored web applications, internal admin dashboards, and database tools built for operational utility.
              </p>
            </div>

            {/* Division 4: AI & Automation */}
            <div
              onClick={() => handleServiceClick('Custom AI Agent Development', 'ai-automation')}
              className="p-5 bg-white border border-[#E0D8CB] rounded cursor-pointer hover:border-[#191C21] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EFE9DF]">
                <span className="font-mono text-xs font-bold text-[#B84C2A]">04 / AUTOMATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9AA0AC] group-hover:text-[#191C21] group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-base font-medium text-[#191C21] group-hover:text-[#B84C2A] transition-colors">
                AI Agents &amp; Automation
              </h3>
              <p className="text-xs text-[#6A7180] leading-relaxed">
                Document search agents, Excel pipelines, notification bots &amp; human-reviewed AI software.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
