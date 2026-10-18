import React from 'react';

export default function CapabilitiesMatrix() {
  const sections = [
    {
      code: 'SEC 01',
      category: 'Frontend & User Interface',
      skills: [
        'React (v18 & v19)',
        'JavaScript (Modern ES6+)',
        'Tailwind CSS & Responsive Layouts',
        'Vite Toolchain',
        'Semantic HTML5 & Accessibility',
        'Single-Page Application (SPA) Architecture'
      ]
    },
    {
      code: 'SEC 02',
      category: 'Backend & API Engineering',
      skills: [
        'Node.js Runtime',
        'Express.js Framework',
        'RESTful API Design & Endpoints',
        'JWT Authentication & Access Control',
        'Webhook Ingestion & Routing',
        'Error Handling & Logging'
      ]
    },
    {
      code: 'SEC 03',
      category: 'Databases & Data Storage',
      skills: [
        'PostgreSQL Relational Database',
        'MongoDB Atlas (Document Store)',
        'Schema Design & Relational Modeling',
        'Data Validation & Query Sanitization',
        'Data Export Pipelines (Excel / JSON)'
      ]
    },
    {
      code: 'SEC 04',
      category: 'Business Automation & Bots',
      skills: [
        'Telegram Bot API & Webhooks',
        'WhatsApp Alert Integrations',
        'Google Sheets API Integration',
        'Task Scheduling & Cron Workflows',
        'Automated Document Processing'
      ]
    },
    {
      code: 'SEC 05',
      category: 'Tender & Procurement Technology',
      skills: [
        'GeM (Government e-Marketplace) Workflows',
        'CPPP (Central Public Procurement Portal)',
        'IREPS (Indian Railways E-Procurement)',
        'RFP/RFQ Specification & Feasibility Review',
        'Pre-Qualification (PQ) Evaluation',
        'EMD & Performance Bank Guarantee (PBG) Tracking',
        'Clause-by-Clause Compliance Matrices'
      ]
    },
    {
      code: 'SEC 06',
      category: 'Tools & Development Environment',
      skills: [
        'Git & GitHub Version Control',
        'Netlify & Vercel Deployment',
        'Postman API Testing',
        'Basic GIS & Coordinate Workflows',
        'Technical Drawing Review'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 border-b border-[#E6E0D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 05 · Capabilities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Technical Capabilities &amp; Stack
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-sm sm:text-base text-[#525966] leading-relaxed max-w-xl">
              An inventory of core programming languages, frameworks, data tools, and public-procurement systems I work with on production deliverables.
            </p>
          </div>
        </div>

        {/* Clean Architectural Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec) => (
            <div
              key={sec.code}
              className="p-6 bg-[#FAF7F2] border border-[#E0D8CB] rounded space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D5]">
                <span className="font-mono text-xs font-semibold text-[#B84C2A]">
                  {sec.code}
                </span>
                <span className="font-serif text-sm font-medium text-[#191C21]">
                  {sec.category}
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#404652] font-mono">
                {sec.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84C2A]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
