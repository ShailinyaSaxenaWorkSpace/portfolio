import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CustomSoftwareService({ onSelectService }) {
  const softwareSolutions = [
    {
      title: 'Custom Web Applications',
      desc: 'Purpose-built web applications designed around your exact operational workflows, client touchpoints, and business logic using modern React and Node.js.'
    },
    {
      title: 'Internal Business Management Systems',
      desc: 'Centralized operational software to manage projects, staff activity, equipment allocations, and internal coordination across teams.'
    },
    {
      title: 'Admin Panels & Executive Dashboards',
      desc: 'Single-screen operational dashboards providing real-time visibility into project milestones, financial summaries, and team activity logs.'
    },
    {
      title: 'Inventory & Record-Management Software',
      desc: 'Structured database systems for tracking physical assets, material dispatches, equipment logs, and warehouse inventories.'
    },
    {
      title: 'Document-Management Applications',
      desc: 'Secure cloud repositories with role-based access, document indexing, version history, and rapid search across technical drawings and files.'
    },
    {
      title: 'Tender-Tracking & Bid-Management Tools',
      desc: 'Custom software to track concurrent public tenders, corrigenda updates, submission deadlines, and bid security instruments.'
    },
    {
      title: 'Database-Driven Business Applications',
      desc: 'High-integrity relational and document databases (PostgreSQL, MongoDB) with clean schema designs and secure API endpoints.'
    },
    {
      title: 'Reporting & Analytics Utilities',
      desc: 'Automated data aggregation pipelines that compile raw operational numbers into actionable charts, PDF summaries, and executive reports.'
    },
    {
      title: 'Excel Automation & Data Processing',
      desc: 'Python-based automation scripts and utilities that clean, reconcile, transform, and export massive spreadsheets without human error.'
    },
    {
      title: 'API Integrations & Webhooks',
      desc: 'Custom connectors bridging disconnected third-party tools, ERP systems, communication channels, and government portals.'
    },
    {
      title: 'Custom Desktop Applications',
      desc: 'Offline-capable, secure desktop utilities engineered for specialized data processing, file conversions, and field office use.'
    },
    {
      title: 'Workflow & Multi-Stage Approval Systems',
      desc: 'Digital sign-off pipelines where purchase requisitions, field reports, and technical submittals move through defined hierarchy levels.'
    },
    {
      title: 'Maintenance & Feature Enhancements',
      desc: 'Ongoing code audits, database optimization, bug fixes, feature expansion, and performance tuning for existing software assets.'
    }
  ];

  const handleCustomSoftwareCTA = () => {
    if (onSelectService) {
      onSelectService('Custom Software Development');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="custom-software" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 03 · Service Three
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Custom Software &amp; Business Applications
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#4E5564] leading-relaxed">
              Off-the-shelf tools do not always match the way a business operates. We develop tailored software to organize information, streamline workflows, and solve specific operational problems.
            </p>
            <div className="pt-2">
              <button
                onClick={handleCustomSoftwareCTA}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
              >
                <span>Discuss Custom Software</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Software Capabilities Grid */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#EAE4D9]">
            <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
              Bespoke Software Offerings
            </span>
            <span className="font-mono text-[11px] text-[#7A8190]">
              Built to Your Operational Constraints
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white border border-[#E0D8CB] rounded space-y-2.5 hover:border-[#191C21]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B84C2A]" />
                  <h3 className="font-serif text-base font-medium text-[#191C21]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#555C6A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scope Definition Note */}
        <div className="p-6 sm:p-8 bg-white border border-[#DDD5C7] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="font-mono text-xs font-bold text-[#B84C2A] block uppercase">
              Practical Scope Engineering
            </span>
            <h4 className="font-serif text-lg font-medium text-[#191C21]">
              Every software project is scoped to your exact business constraints
            </h4>
            <p className="text-xs text-[#525966] leading-relaxed">
              We define deliverables according to your existing team workflow, operational requirements, realistic budget, and data security needs — avoiding over-engineered architectures you don't need.
            </p>
          </div>
          <button
            onClick={handleCustomSoftwareCTA}
            className="shrink-0 px-5 py-2.5 rounded text-xs font-semibold text-[#191C21] bg-[#F2ECE3] hover:bg-[#EAE2D5] border border-[#D5CCBD] transition-colors"
          >
            Request a Software Proposal
          </button>
        </div>

      </div>
    </section>
  );
}
