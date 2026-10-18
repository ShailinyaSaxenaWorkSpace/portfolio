import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export default function AiAutomationService({ onSelectService }) {
  const agentOfferings = [
    'Internal business assistants tailored to your SOPs',
    'Document-search and searchable company knowledge-base agents',
    'Tender-document analysis and specification extraction assistants',
    'AI-assisted information extraction from complex contracts & RFPs',
    'Research and automated summary reporting assistants',
    'Customer inquiry qualification and automated response assistants',
    'Autonomous business workflow agents triggered by webhooks',
    'Retrieval-Augmented Generation (RAG) question-answering systems',
    'AI agents integrated securely with approved business tools and APIs'
  ];

  const automationOfferings = [
    'Repetitive office-work and manual data-entry automation',
    'Spreadsheet, CSV, and Excel formula and data automation',
    'Document extraction, optical text capture, and file classification',
    'Automated management reports, KPI bulletins, and daily summaries',
    'Multi-channel email, Telegram, and WhatsApp notification workflows',
    'Lead intake, qualification, and enquiry routing pipelines',
    'Two-way data synchronization between disconnected business tools',
    'Workflow milestone tracking, SLA monitors, and automated reminders',
    'API-based connectors and secure webhook ingestion pipelines',
    'Custom lightweight automation monitoring dashboards'
  ];

  const aiSoftwareOfferings = [
    'Document intelligence applications for high-volume technical PDFs',
    'Searchable company knowledge bases with semantic vector indexing',
    'Tender information extraction systems for rapid clause isolation',
    'Internal AI tools operating strictly on approved company repositories',
    'Custom AI-enabled analytics dashboards and reporting software',
    'Local-first AI tools where data privacy prohibits third-party cloud models',
    'Human-in-the-loop reviewed AI workflows with audit trails'
  ];

  const deliverySteps = [
    { num: '01', title: 'Understand Business Problem', desc: 'Isolate the core bottleneck, operational delay, or repetitive task costing your team valuable time.' },
    { num: '02', title: 'Map Existing Workflow', desc: 'Document the current steps, file formats, team hand-offs, edge cases, and human touchpoints.' },
    { num: '03', title: 'Identify Automation Opportunities', desc: 'Determine where deterministic automation vs. intelligent AI models provide the highest ROI.' },
    { num: '04', title: 'Define Security & Privacy', desc: 'Establish strict data boundaries, API credentials, access controls, and privacy constraints.' },
    { num: '05', title: 'Develop Prototype Solution', desc: 'Build an initial working prototype or MVP to validate accuracy and operational feasibility.' },
    { num: '06', title: 'Test on Realistic Cases', desc: 'Stress-test the system with messy, real-world company documents, unusual inputs, and edge cases.' },
    { num: '07', title: 'Deploy & Provide Support', desc: 'Roll out the workflow into active team use, conduct user onboarding, and provide maintenance.' }
  ];

  const handleAiCTA = () => {
    if (onSelectService) {
      onSelectService('Custom AI Agent Development');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-automation" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 04 · Service Four
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Custom AI Agents &amp; Intelligent Automation
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#4E5564] leading-relaxed">
              We design practical AI-powered systems and automated workflows that help businesses search information, process documents, reduce repetitive work, and improve internal operations.
            </p>
            <div className="pt-2">
              <button
                onClick={handleAiCTA}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
              >
                <span>Build a Custom AI Solution</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars of AI & Automation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Custom AI Agents */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#EAE4D9]">
              <span className="font-mono text-xs font-bold text-[#B84C2A]">01 / AGENTS</span>
              <h3 className="font-serif text-lg font-medium text-[#191C21]">Custom AI Agents</h3>
            </div>
            <p className="text-xs text-[#6A7180] leading-relaxed">
              Specialized assistants trained to understand your domain, query company data, and assist staff with research and extraction.
            </p>
            <ul className="space-y-2.5 pt-2">
              {agentOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#4E5564] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#191C21] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Business Automation */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#EAE4D9]">
              <span className="font-mono text-xs font-bold text-[#B84C2A]">02 / PIPELINES</span>
              <h3 className="font-serif text-lg font-medium text-[#191C21]">Business Automation</h3>
            </div>
            <p className="text-xs text-[#6A7180] leading-relaxed">
              Reliable behind-the-scenes pipelines that eliminate routine spreadsheet manipulation, copy-pasting, and missed alerts.
            </p>
            <ul className="space-y-2.5 pt-2">
              {automationOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#4E5564] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#191C21] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: AI-Enabled Business Software */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#EAE4D9]">
              <span className="font-mono text-xs font-bold text-[#B84C2A]">03 / SYSTEMS</span>
              <h3 className="font-serif text-lg font-medium text-[#191C21]">AI-Enabled Software</h3>
            </div>
            <p className="text-xs text-[#6A7180] leading-relaxed">
              Complete software applications infused with machine intelligence for search, categorization, and contextual document mining.
            </p>
            <ul className="space-y-2.5 pt-2">
              {aiSoftwareOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#4E5564] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#191C21] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 7-Step Delivery Process */}
        <div className="p-8 sm:p-10 bg-white border border-[#DDD5C7] rounded-lg space-y-8 mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#EAE4D9]">
            <div>
              <span className="font-mono text-xs font-bold text-[#B84C2A] block uppercase">
                Systematic Implementation
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#191C21] pt-1">
                Our 7-Step AI &amp; Automation Delivery Framework
              </h3>
            </div>
            <span className="text-xs font-mono text-[#7A8190]">
              Iterative · Tested · Secure
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.slice(0, 4).map((step) => (
              <div key={step.num} className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#191C21] block pb-2 border-b border-[#EAE4D9]">
                  STEP {step.num}
                </span>
                <h4 className="font-serif text-base font-medium text-[#191C21]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#525966] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#EAE4D9]">
            {deliverySteps.slice(4, 7).map((step) => (
              <div key={step.num} className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#191C21] block pb-2 border-b border-[#EAE4D9]">
                  STEP {step.num}
                </span>
                <h4 className="font-serif text-base font-medium text-[#191C21]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#525966] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Crucial Governance & Human-in-the-Loop Safeguard */}
        <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#DDD5C5] rounded-md text-xs text-[#5A606E] space-y-2">
          <div className="flex items-center gap-2 font-mono font-semibold text-[#191C21]">
            <ShieldAlert className="w-4 h-4 text-[#B84C2A]" />
            <span>Operational Integrity: Human-in-the-Loop Protocol</span>
          </div>
          <p className="leading-relaxed">
            We build practical AI tools, but we never make reckless claims that AI systems are infallible or autonomous replacements for professional human oversight. Every AI workflow handling financial numbers, tender compliance, legal contracts, procurement decisions, or statutory filings is explicitly architected with mandatory human-in-the-loop review, validation checkpoints, and transparent audit trails.
          </p>
        </div>

      </div>
    </section>
  );
}
