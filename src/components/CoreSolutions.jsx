import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldAlert, Cpu, Sun, Radio, 
  Network, Layers 
} from 'lucide-react';

export default function CoreSolutions({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const handleDiscuss = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'digital', label: '1. Technology & Digital' },
    { id: 'tender', label: '2. Tender & Procurement' },
    { id: 'energy', label: '3. Solar, Renewable & Telecom' },
    { id: 'security', label: '4. Security, Drones & Defence' },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 border-b border-[#E6E0D5] bg-[#FBF9F5] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F2ECE3] border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#B84C2A]">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE SOLUTION DOMAINS</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#191C21]">
            Engineering &amp; Technology Solutions
          </h2>
          
          <p className="text-base text-[#525966] leading-relaxed font-sans">
            Neudact Engineers delivers precision across software development, public procurement, solar engineering, and infrastructure technology. Every offering is accompanied by a transparent delivery model label.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-[#EAE4D9]">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#191C21] text-white shadow-sm'
                  : 'bg-white text-[#575D6A] border border-[#DDD7CC] hover:bg-[#F2ECE3] hover:text-[#191C21]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Solution Offerings Grid */}
        <div className="space-y-16">

          {/* GROUP 1: TECHNOLOGY, SOFTWARE & AUTOMATION */}
          {(activeTab === 'all' || activeTab === 'digital') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E0D8CB]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#B84C2A]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
                      Software, Web Development &amp; Automation
                    </h3>
                    <span className="font-mono text-xs text-[#7A8190]">Digital architecture, AI workflows, and high-performance business applications</span>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs text-[#1E6B37] font-semibold bg-[#EBF3ED] px-2.5 py-1 rounded border border-[#C4DFC9]">
                  Direct In-House Delivery
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Offering 1.1 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">01.1 / WEBSITES</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Corporate &amp; Engineering Web Platforms
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      High-speed, SEO-optimized company portals, technical product catalogs, and bid presentation pages built with React and modern cloud architectures.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Responsive, zero-bloat static &amp; dynamic sites</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Interactive quotation calculators &amp; RFQ forms</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Sub-second load times &amp; enterprise hosting</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Software, Web Development & Automation')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Request Web Platform Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 1.2 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">01.2 / SOFTWARE</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Custom Software &amp; Business Applications
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Internal operational dashboards, milestone tracking software, multi-site inventory tools, and lightweight enterprise ERP modules.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Tailored database architectures (Postgres/SQL)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Role-based access control (RBAC) &amp; audit trails</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Automated PDF report and invoice generation</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Software, Web Development & Automation')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Discuss Software Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 1.3 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">01.3 / AI &amp; AUTOMATION</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      AI Agents &amp; Workflow Automations
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Custom document parser bots, tender notification pipelines, Excel batch transformers, and automated customer follow-up systems.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Document query agents with human review loop</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>WhatsApp and Telegram automated alert dispatchers</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Zero recurring per-token waste with targeted models</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Software, Web Development & Automation')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Automate Your Workflows</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* GROUP 2: TENDER MANAGEMENT & PROCUREMENT */}
          {(activeTab === 'all' || activeTab === 'tender') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E0D8CB]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#B84C2A]">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
                      Tender Management &amp; Procurement Support
                    </h3>
                    <span className="font-mono text-xs text-[#7A8190]">Public procurement, bid documentation, compliance review &amp; IREPS tools</span>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs text-[#1E6B37] font-semibold bg-[#EBF3ED] px-2.5 py-1 rounded border border-[#C4DFC9]">
                  Direct In-House Delivery
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Offering 2.1 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">02.1 / RESEARCH</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Tender Identification &amp; Research
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Daily tracking across IREPS, GeM, CPPP, State e-Procurement portals, and PSU noticeboards filtered by CPV, product code, and territory.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Notice Inviting Tender (NIT) extraction</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Pre-bid conference queries &amp; corrigenda tracking</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Tender Management & Procurement Support')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Configure Tender Tracking</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 2.2 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">02.2 / COMPLIANCE</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Eligibility Audit &amp; Bid Documentation
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Technical qualification cross-checks, financial turnover verification, credential compilation, and error-proof bid dossiers.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Line-by-line compliance checklists</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>EMD, PBG, and undertaking certificate formats</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Tender Management & Procurement Support')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Review Tender Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 2.3 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#B84C2A]">02.3 / HARVESTER</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Proprietary Tool</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      IREPS Harvester &amp; Excel Analysis
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Automated railway document collector, file download verification, BOQ item pricing comparisons, and multi-round bidding simulations.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Batch download &amp; SHA-checksum validation</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Organized folder dossiers ready for submission</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Tender Management & Procurement Support')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#B84C2A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Request Harvester Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* GROUP 3: SOLAR & RENEWABLE ENERGY SOLUTIONS */}
          {(activeTab === 'all' || activeTab === 'energy') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E0D8CB]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#1A549E]">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
                      Solar &amp; Renewable Energy Solutions
                    </h3>
                    <span className="font-mono text-xs text-[#7A8190]">Plant electrical schematics, balance-of-system equipment &amp; telecom links</span>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs text-[#1A549E] font-semibold bg-[#EFF4FA] px-2.5 py-1 rounded border border-[#BFD5F2]">
                  Specialist Partners &amp; Sourced Equipment
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Offering 3.1 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#1A549E]">03.1 / DESIGN</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Solar Plant SLD Design &amp; Schematics
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Single Line Diagrams (SLD), array layout schematics, string combiner calculations, and grid interconnection diagrams engineered through qualified electrical partners.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>IEC &amp; IS electrical code compliant drawings</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>HT/LT substation layout coordination</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Solar & Renewable Energy Solutions')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#1A549E] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Request SLD Design Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 3.2 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#1A549E]">03.2 / BALANCE OF SYSTEM</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-sourced font-medium">Sourced Solution</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      BoS Accessories &amp; Solar Equipment Sourcing
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Procurement coordination for DC cabling, AC/DC distribution boxes, surge protection devices, mounting structures, and inverter units from verified manufacturers.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Manufacturer test certificates &amp; warranty logs</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Direct vendor pricing with zero markup opacity</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Solar & Renewable Energy Solutions')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#1A549E] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Source Solar Components</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 3.3 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#1A549E]">03.3 / TELECOM &amp; FIBER</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Networking &amp; Telecom Infrastructure
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Enterprise switching, routing, fiber-optic distribution (OFC), and plant SCADA connectivity executed through certified field network partners.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Armored optical fiber &amp; splicing supervision</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Industrial Ethernet switches &amp; telemetry links</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Networking & Telecom Infrastructure')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#1A549E] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Plan Telecom Infrastructure</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* GROUP 4: SECURITY, CCTV, DRONES & DEFENCE ENGINEERING */}
          {(activeTab === 'all' || activeTab === 'security') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E0D8CB]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-white border border-[#DDD7CC] text-[#A34E1A]">
                    <Network className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
                      Security, CCTV, Drones &amp; Defence Engineering
                    </h3>
                    <span className="font-mono text-xs text-[#7A8190]">Video surveillance, commercial UAV sourcing &amp; precision engineering coordination</span>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs text-[#A34E1A] font-semibold bg-[#FAF2EC] px-2.5 py-1 rounded border border-[#EDD2BE]">
                  Regulated &amp; Partner-Delivered
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Offering 4.1 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#A34E1A]">04.1 / CCTV &amp; VMS</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-sourced font-medium">Sourced &amp; Partner</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Security, CCTV &amp; Video Management Systems
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Commercial IP surveillance cameras, central Video Management Systems (VMS), storage NVR/SAN arrays, and control room deployment coordination.
                    </p>
                    <ul className="pt-2 space-y-1.5 text-xs text-[#525966]">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>High-density PTZ, bullet &amp; thermal camera arrays</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B37] shrink-0" />
                        <span>Perimeter intrusion detection &amp; failover storage</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Security, CCTV & VMS')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#A34E1A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Inquire CCTV Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 4.2 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#A34E1A]">04.2 / UAV SYSTEMS</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-sourced font-medium">Sourced Solution</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Commercial Drone &amp; UAV Sourcing
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Sourcing and integration coordination for industrial inspection, volumetric surveying, agricultural mapping, and high-altitude monitoring UAVs.
                    </p>
                    
                    {/* Mandatory Compliance Notice */}
                    <div className="p-2.5 rounded bg-[#FAF2EC] border border-[#EDD2BE] text-[11px] text-[#A34E1A] flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Statutory Notice:</strong> Availability, supply, and deployment depend on product specifications, partner capabilities, and applicable statutory approvals (DGCA/MoCA).</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Drone & UAV Solutions')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#A34E1A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Check UAV Feasibility</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Offering 4.3 */}
                <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg depth-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#A34E1A]">04.3 / DEFENCE ENG.</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      Indigenous Defence &amp; Engineering Solutions
                    </h4>
                    <p className="text-xs text-[#6A7180] leading-relaxed">
                      Engineering requirement coordination, embedded electronics prototyping, ruggedized chassis sourcing, and sub-assembly development with verified technical partners.
                    </p>
                    
                    {/* Mandatory Compliance Notice */}
                    <div className="p-2.5 rounded bg-[#FAF2EC] border border-[#EDD2BE] text-[11px] text-[#A34E1A] flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Compliance Disclosure:</strong> Does not include controlled defence items or unverified defence-sector approvals. All regulated procurement subject to statutory compliance.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDiscuss('Indigenous Defence & Engineering Solutions')}
                    className="mt-6 pt-4 border-t border-[#EFE9DF] text-xs font-mono font-medium text-[#191C21] hover:text-[#A34E1A] flex items-center justify-between group cursor-pointer"
                  >
                    <span>Coordinate Engineering Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
