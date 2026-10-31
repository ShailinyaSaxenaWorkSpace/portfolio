import React, { useState } from 'react';
import { FileSpreadsheet, Code } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites & Web Apps' },
    { id: 'software', label: 'Custom Software' },
    { id: 'tendering', label: 'Tender Management' },
    { id: 'ai-automation', label: 'AI Agents & Automation' }
  ];

  const projects = [
    {
      id: 'gem-tender-analyzer',
      category: 'tendering',
      status: 'Working Internal Tool',
      title: 'GeM Tender Document Analyzer & Compliance Matrix Generator',
      tagline: 'Procurement Automation · Python & Data Extraction',
      problem: 'Government RFPs on the Government e-Marketplace (GeM) often span 60 to 120 pages of dense legal, financial, and technical terms. Manually reviewing each clause for Pre-Qualification (PQ) eligibility, Earnest Money Deposit (EMD) values, and Performance Bank Guarantees (PBG) took 6 to 8 hours per bid with constant risk of missing a disqualifying detail.',
      solution: 'Developed an automated document analyzer in Python. The tool parses uploaded tender PDFs, searches for critical clause patterns and technical parameters, evaluates eligibility criteria, and automatically outputs a formatted Excel compliance matrix ready for bid documentation.',
      functionality: 'Automated PDF parsing, NIT clause isolation, turnover and net worth formula checks, and instant formatted Excel matrix generation with clause-by-clause compliance statuses.',
      technologies: ['Python', 'Flask', 'OpenPyXL', 'PDF Mining', 'Excel Automation', 'GeM Portal Workflows'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'feature',
      preview: {
        header: 'GeM_Bid_Analysis_Report.xlsx',
        rows: [
          { clause: 'Cl. 3.1', desc: 'Pre-Qualification: 3 years experience in similar works', status: 'Complied' },
          { clause: 'Cl. 4.2', desc: 'EMD: ₹1,50,000 via BG / FDR to Executive Engineer', status: 'Flagged / PBG' },
          { clause: 'Cl. 6.4', desc: 'Financial Turnover: Minimum ₹1.2 Cr in last 3 FY', status: 'Complied' },
          { clause: 'Cl. 8.1', desc: 'OEM Authorization Letter (MAF) required in Cover 1', status: 'Action Required' }
        ]
      }
    },
    {
      id: 'tender-dashboard',
      category: 'software',
      status: 'Internal Tool Prototype',
      title: 'TenderOps: Bid Lifecycle & Milestone Management Portal',
      tagline: 'Operations Management · JavaScript & Webhooks',
      problem: 'Managing multiple concurrent public tenders across GeM, CPPP, and IREPS required tracking numerous shifting dates — corrigenda, pre-bid meetings, submission deadlines, and PBG issuance. Miscommunication across internal teams led to near-missed deadlines and misplaced files.',
      solution: 'Created an internal operational portal providing a centralized view of all active bids across their lifecycle stages (Opportunity, Evaluation, Clarification, Preparation, Submission, and Award). Incorporated automated WhatsApp alert dispatching to notify team leads 48h and 12h before critical submission deadlines.',
      functionality: 'Multi-stage bid pipeline tracking, milestone countdowns, document attachment verification checklists, and automated alert webhook dispatching.',
      technologies: ['JavaScript (ES6+)', 'WhatsApp Webhook API', 'LocalStorage Sync', 'Responsive CSS', 'Export Workflows'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'feature',
      preview: {
        header: 'TenderOps_Live_Monitor.web',
        rows: [
          { clause: 'IREPS / NR-892', desc: 'Railway Optical Fiber Installation Tender', status: '48h to Closing' },
          { clause: 'GeM / PSU-241', desc: 'Substation Telemetry & Control Units', status: 'Cover 1 Compiled' },
          { clause: 'CPPP / DEF-109', desc: 'Technical Proposal & Drawing Revision B', status: 'Submitted' }
        ]
      }
    },
    {
      id: 'neudact-website',
      category: 'websites',
      status: 'Production Website',
      title: 'Neudact Engineers Corporate Website & Service Portal',
      tagline: 'Frontend Engineering · React 19 & Tailwind CSS',
      problem: 'Engineering firms, EPC contractors, and technical service providers require an authoritative digital presence that explains complex technical and tender services with clarity, without relying on sluggish templates or generic AI designs.',
      solution: 'Custom-engineered single-page application built with modern React 19 and Tailwind CSS. Features an editorial typography hierarchy, responsive grids, dynamic CTA service preselection, Netlify Forms integration, and instant fallback communication links.',
      functionality: 'Sub-second load times, dynamic inquiry preselection, multi-channel inquiry routing (Netlify, WhatsApp, Gmail), and integrated PDF document distribution.',
      technologies: ['React 19', 'Tailwind CSS', 'Vite', 'JavaScript (ES6+)', 'Netlify Forms', 'Responsive UI'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'compact',
      architectureNote: 'High-performance React 19 architecture pre-rendered for search bots and AI crawler discovery.'
    },
    {
      id: 'hrms-lite',
      category: 'software',
      status: 'Full-Stack Internal Tool',
      title: 'HRMS Lite: Staff & Attendance Management System',
      tagline: 'Full-Stack Application · React, Node.js & MongoDB',
      problem: 'Small operations teams and contracting offices frequently rely on scattered spreadsheets to track attendance, staff roles, and monthly records, leading to payroll reconciliation errors and lack of access control.',
      solution: 'Engineered a clean full-stack web application with role-based JWT authentication, real-time employee directories, and persistent cloud storage on MongoDB Atlas.',
      functionality: 'Role-based access control, attendance logging, employee profiles, and exportable data summaries.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT Authentication', 'REST APIs'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'compact',
      architectureNote: 'Full-stack modular REST API with JWT role-based access control and persistent Atlas schemas.'
    },
    {
      id: 'telegram-bot',
      category: 'ai-automation',
      status: 'Working Automation Tool',
      title: 'Automated Operations & Document Dispatch Bot',
      tagline: 'Field Automation · Telegram Bot API & Node.js',
      problem: 'Field personnel and site engineers required a lightweight, mobile-first way to submit receipts, verify drawing numbers, and receive instant operational updates without logging into complex desktop portals.',
      solution: 'Built an asynchronous Telegram bot that connects chat commands to cloud storage and webhook listeners, allowing immediate file ingestion, automatic naming, and team broadcasting.',
      functionality: 'Chat-based document submission, automatic file categorization, cloud repository upload, and real-time team broadcasts.',
      technologies: ['Node.js', 'Telegram Bot API', 'Webhook Listeners', 'Cloud Storage', 'Task Schedulers'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'compact',
      architectureNote: 'Asynchronous event listeners and webhook endpoints dispatching multi-channel team notifications.'
    },
    {
      id: 'tender-rag-assistant',
      category: 'ai-automation',
      status: 'Working Prototype',
      title: 'Tender Clause Extractor & Q&A Assistant',
      tagline: 'Applied AI · Python, RAG & Vector Embeddings',
      problem: 'Bidders frequently need to look up specific clauses (e.g. liquidated damages formula, turnover requirements, defect liability period) across 100+ page NIT documents without manual page-by-page scanning.',
      solution: 'Developed a prototype retrieval-based agent that indexes PDF documents into semantic vector chunks, retrieving exact clause excerpts with direct page citations for human verification.',
      functionality: 'Semantic question answering over complex contracts, citation extraction, clause cross-referencing, and human-in-the-loop review confirmation.',
      technologies: ['Python', 'Retrieval-Augmented Generation (RAG)', 'Vector Search', 'Text Parsing'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'compact',
      architectureNote: 'Dense vector retrieval indexing multi-hundred page tender PDFs with direct citation extraction.'
    },
    {
      id: 'epc-pq-evaluator',
      category: 'tendering',
      status: 'Concept Demonstration',
      title: 'EPC & Railway Pre-Qualification Feasibility Evaluator',
      tagline: 'Procurement Tool · Eligibility Calculation Engine',
      problem: 'Evaluating whether past completed contracts qualify under complex "similar work" rules (e.g., 3 works of 40%, 2 of 50%, or 1 of 80% contract value) is cumbersome and error-prone.',
      solution: 'Engineered an interactive qualification calculator that models CPWD, Railway, and GeM eligibility rules to test company turnover and completion certificates prior to bid purchase.',
      functionality: '3-year turnover averaging, single/double/triple work certificate matching, solvency test, and gap warning indicators.',
      technologies: ['JavaScript (ES6+)', 'Eligibility Logic', 'Excel Modeling', 'Audit Rules'],
      github: 'https://github.com/ShailinyaSaxenaWorkSpace',
      type: 'compact',
      architectureNote: 'Deterministic financial modeling engine evaluating CPWD and Railway qualification criteria.'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-10 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 07 · Verified Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Portfolio &amp; Project Demonstrations
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-2">
            <p className="text-base text-[#525966] leading-relaxed">
              Concrete tools, production software, and working prototypes engineered to solve operational bottlenecks, reduce manual documentation risk, and improve business workflow efficiency.
            </p>
            <p className="font-mono text-xs text-[#7A8190]">
              Every entry clearly states its development classification. Zero fabricated client logos or unverified metrics.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-[#EAE4D9]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition-colors ${
                activeTab === cat.id
                  ? 'bg-[#191C21] text-white font-medium'
                  : 'bg-white border border-[#DDD5C7] text-[#555C6A] hover:text-[#191C21] hover:bg-[#F2ECE3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 lg:p-10 bg-white border border-[#E0D8CB] rounded-lg space-y-6 depth-card shadow-[0_4px_16px_rgba(25,28,33,0.03)]"
            >
              {/* Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE4D9]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#B84C2A]">
                    PROJ {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs text-[#7A8190]">
                    {project.tagline}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#FAF5EE] border border-[#E0D8CB] text-[#191C21] font-semibold">
                    {project.status}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#575D6A] hover:text-[#191C21]"
                      aria-label={`View ${project.title} on GitHub`}
                      title={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GitHub Code <span className="sr-only">({project.title})</span></span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description Grid */}
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-7 space-y-4">
                  <p className="font-serif text-2xl font-medium text-[#191C21] tracking-tight">
                    {project.title}
                  </p>

                  <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#4E5564]">
                    <div>
                      <span className="text-[#191C21] font-medium block pb-0.5">The Operational Challenge:</span>
                      <p>{project.problem}</p>
                    </div>

                    <div>
                      <span className="text-[#191C21] font-medium block pb-0.5">The Technical Solution:</span>
                      <p>{project.solution}</p>
                    </div>

                    <div>
                      <span className="text-[#191C21] font-medium block pb-0.5">Main Functionality:</span>
                      <p>{project.functionality}</p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#FAF7F2] border border-[#E0D8CB] text-[#555C6A] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview Box if available */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {project.preview ? (
                    <div className="p-4 bg-[#FAF7F2] border border-[#DDD5C7] rounded font-mono text-xs space-y-3 shadow-inner">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E0D8CB] text-[#7A8190] text-[11px]">
                        <span className="flex items-center gap-1.5 text-[#191C21] font-medium">
                          <FileSpreadsheet className="w-3.5 h-3.5 text-[#B84C2A]" />
                          {project.preview.header}
                        </span>
                        <span>Generated Matrix</span>
                      </div>
                      <div className="space-y-2">
                        {project.preview.rows.map((row, rIdx) => (
                          <div key={rIdx} className="p-2 bg-white border border-[#EAE4D9] rounded text-[11px] space-y-1">
                            <div className="flex items-center justify-between font-semibold">
                              <span className="text-[#191C21]">{row.clause}</span>
                              <span className={
                                row.status === 'Complied' ? 'text-green-700' :
                                row.status.includes('Flagged') ? 'text-amber-700' :
                                'text-blue-700'
                              }>
                                {row.status}
                              </span>
                            </div>
                            <p className="text-[#6A7180] text-[10px] leading-tight">
                              {row.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 bg-[#FAF7F2] border border-[#E0D8CB] rounded flex flex-col items-center justify-center text-center space-y-2">
                      <Code className="w-8 h-8 text-[#B84C2A]" />
                      <span className="font-mono text-xs font-semibold text-[#191C21]">
                        {project.status}
                      </span>
                      <p className="text-xs text-[#7A8190] max-w-xs">
                        {project.architectureNote || 'Modular architecture engineered for production deployment.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
