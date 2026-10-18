import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CombinedSolutions({ onSelectService }) {
  const solutions = [
    {
      num: '01',
      title: 'Digital Business Launch',
      tagline: 'Establish credibility & capture incoming business opportunities',
      summary: 'A unified package that delivers an authoritative company website, high-conversion enquiry forms, automated lead-capture workflows, and traffic analytics in one coordinated deployment.',
      components: [
        'Custom multi-page or single-page corporate website',
        'Direct inquiry capture linked to email & WhatsApp alerts',
        'Automated lead qualification & spreadsheet synchronization',
        'Executive web analytics and conversion monitoring'
      ]
    },
    {
      num: '02',
      title: 'Tender Management System',
      tagline: 'Full operational infrastructure for active government contractors',
      summary: 'Combines our end-to-end tender research and compliance expertise with custom operational software to create a comprehensive bid-management setup.',
      components: [
        'Multi-portal tender discovery and corrigenda tracking feeds',
        'Structured cloud repository for company credentials & experience certificates',
        'Clause-by-clause compliance matrix generator and pre-bid tracker',
        'Milestone alert system for EMDs, PBGs, and closing deadlines'
      ]
    },
    {
      num: '03',
      title: 'AI-Powered Document Processing',
      tagline: 'High-speed information extraction from dense technical PDFs',
      summary: 'A custom software solution powered by machine intelligence that ingests heavy technical specifications, extracts required parameters, organizes results, and outputs audit-ready reports for human verification.',
      components: [
        'Automated PDF parsing and specification clause extraction',
        'Structured tabular comparison against company capabilities',
        'Export to formatted Excel compliance sheets and management summaries',
        'Mandatory human-in-the-loop validation checkpoints'
      ]
    },
    {
      num: '04',
      title: 'Business Operations Automation',
      tagline: 'Bridge fragmented spreadsheets, field reports & databases',
      summary: 'Custom operational software tightly connected with your existing spreadsheets, approved third-party APIs, persistent databases, and real-time alert channels.',
      components: [
        'Two-way sync between operational spreadsheets and central PostgreSQL/MongoDB',
        'Automated Telegram/WhatsApp dispatch bots for field engineers',
        'Role-based admin dashboards for project milestones and inventory',
        'Automated recurring report generation without manual copy-pasting'
      ]
    }
  ];

  const handleCombinedCTA = () => {
    if (onSelectService) {
      onSelectService('Combined Services');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="combined-solutions" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 05 · Integrated Offerings
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Combined Solutions
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#4E5564] leading-relaxed">
              Many business challenges require more than a single service. We combine website engineering, tender documentation support, custom software, and intelligent automation into cohesive operational solutions.
            </p>
            <div className="pt-2">
              <button
                onClick={handleCombinedCTA}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
              >
                <span>Discuss a Combined Solution</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Combined Solutions Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((item) => (
            <div
              key={item.num}
              className="p-6 sm:p-8 bg-white border border-[#E0D8CB] rounded-lg space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D9]">
                  <span className="font-mono text-xs font-bold text-[#B84C2A]">
                    SOLUTION {item.num}
                  </span>
                  <span className="font-mono text-[11px] text-[#7A8190]">
                    Integrated Multi-Disciplinary
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#191C21]">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-[#7A8190]">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-[13px] text-[#525966] leading-relaxed pt-1">
                  {item.summary}
                </p>

                <div className="pt-3 border-t border-[#EAE4D9] space-y-2">
                  <span className="font-mono text-[11px] font-semibold text-[#191C21] block uppercase">
                    Key Solution Components:
                  </span>
                  <ul className="space-y-1.5">
                    {item.components.map((comp, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-[#4E5564]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B84C2A] mt-0.5 shrink-0" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-[#EAE4D9]">
                <button
                  onClick={handleCombinedCTA}
                  className="w-full py-2 px-3 rounded text-xs font-semibold text-[#191C21] bg-[#FAF7F2] hover:bg-[#F2ECE3] border border-[#DDD5C7] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire about this combined setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Scope */}
        <p className="text-xs font-mono text-[#7A8190] text-center">
          Note: These architectures illustrate practical ways our capabilities connect together. We customize every combined engagement to your exact operational requirements.
        </p>

      </div>
    </section>
  );
}
