import React from 'react';
import { FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#F4EFEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Docket & Tagline */}
        <div className="space-y-3">
          <p className="docket flex items-center gap-2 text-[#B84C2A]">
            <span className="w-2 h-2 rounded-full bg-[#B84C2A]" />
            <span>About Neudact Engineers</span>
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
            Where Intelligence Meets Execution.
          </h2>
        </div>

        {/* Core Narrative */}
        <div className="space-y-5 text-base sm:text-lg text-[#3E4554] leading-relaxed">
          <p>
            Neudact Engineers works at the intersection of technology, tender management, and business operations. We help businesses build their digital presence, navigate tender requirements, develop custom software, and automate repetitive workflows with practical AI-powered solutions.
          </p>
          <p className="text-sm sm:text-base text-[#525966]">
            Whether you are an EPC contractor participating in government tenders or a growing enterprise looking to streamline internal operations with custom software and automation, we provide disciplined analysis, transparent processes, and dependable technical execution.
          </p>
        </div>

        {/* Operating Pillars */}
        <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#DFD8CC]">
          <div className="p-5 bg-white/70 border border-[#DDD5C7] rounded space-y-2">
            <span className="font-mono text-xs font-bold text-[#B84C2A] block">
              DISCIPLINE IN COMPLIANCE
            </span>
            <h3 className="font-serif text-base font-medium text-[#191C21]">
              Strict Verification &amp; Accuracy
            </h3>
            <p className="text-xs text-[#525966] leading-relaxed">
              Public procurement leaves zero margin for missing documents or clause ambiguities. We apply the same thoroughness to tender documentation that we apply to production software code.
            </p>
          </div>

          <div className="p-5 bg-white/70 border border-[#DDD5C7] rounded space-y-2">
            <span className="font-mono text-xs font-bold text-[#B84C2A] block">
              PRAGMATIC ENGINEERING
            </span>
            <h3 className="font-serif text-base font-medium text-[#191C21]">
              Solutions Built for Utility
            </h3>
            <p className="text-xs text-[#525966] leading-relaxed">
              We build fast, reliable websites and business software without unnecessary complexity. Every feature is tied directly to solving a real operational bottleneck.
            </p>
          </div>
        </div>

        {/* Resume & Verification Footer */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#DFD8CC] text-xs font-mono text-[#5A606E]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Operational Base: Gurugram, Haryana, India</span>
          </div>

          <a
            href="/Shailinya_Saxena_Resume.pdf"
            download="Shailinya_Saxena_Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-[#DDD5C7] text-[#191C21] hover:text-[#B84C2A] hover:border-[#B84C2A] transition-colors"
            title="Download verified professional resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-[#B84C2A]" />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
