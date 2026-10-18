import React from 'react';

export default function IndustriesServed() {
  const targetIndustries = [
    {
      code: 'IND 01',
      title: 'EPC & Infrastructure Contractors',
      scope: 'Civil, structural, highway, substation, and industrial EPC contracting',
      support: 'Comprehensive NIT/BOQ analysis, technical qualification matrices, turnover & net worth assessments, and turnkey bid compilation.'
    },
    {
      code: 'IND 02',
      title: 'Railway & Transportation Businesses',
      scope: 'Signaling, telecommunications, track-side electrical, and rolling stock sub-contracts',
      support: 'IREPS portal navigation, RDSO specification compliance checks, completion certificate formatting, and tender tracking.'
    },
    {
      code: 'IND 03',
      title: 'Telecom & Optical Fiber Projects',
      scope: 'OFC laying, HDD/trenching, aerial fiber, mobile tower civil works, and BharatNet',
      support: 'Route-wise tender reviews, OEM authorization tracking, rate-contract documentation, and milestone dashboards.'
    },
    {
      code: 'IND 04',
      title: 'Solar & Renewable Energy Companies',
      scope: 'Rooftop solar, ground-mounted MW plants, BOS procurement, and battery storage',
      support: 'SECI / NTPC / State DISCOM tender documentation, technical parameter verification, and project tracking tools.'
    },
    {
      code: 'IND 05',
      title: 'CCTV, Surveillance & Security Systems',
      scope: 'Safe City projects, municipal surveillance, ICCC networks, and access control',
      support: 'Complex technical schedule compliance, SLA evaluation, MAF coordination, and proposal documentation.'
    },
    {
      code: 'IND 06',
      title: 'Engineering & Technical-Service Providers',
      scope: 'Testing, inspection, maintenance contractors, technical staffing, and lab operations',
      support: 'Credential consolidation, ISO compliance matrices, capability profiles, and custom operational software.'
    },
    {
      code: 'IND 07',
      title: 'Procurement & Tender-Focused Businesses',
      scope: 'Distributors, authorized dealers, and suppliers participating in government tenders',
      support: 'GeM portal cataloging, bid participation, EMD / PBG tracking, and automated bid-search pipelines.'
    },
    {
      code: 'IND 08',
      title: 'SMEs Needing Software or Automation',
      scope: 'Growing technical businesses seeking modern digital tools without enterprise overhead',
      support: 'Professional company websites, bespoke web applications, Excel workflow automation, and custom AI agents.'
    }
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 06 · Sector Alignment
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Industries &amp; Business Types We Support
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-2">
            <p className="text-base text-[#4E5564] leading-relaxed">
              We design our tender management, software, and automation services to address the specific documentation rigor and operational workflows required across technical contracting sectors.
            </p>
            <p className="font-mono text-xs text-[#7A8190]">
              Target business categories tailored for structured compliance and technical engineering.
            </p>
          </div>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {targetIndustries.map((ind) => (
            <div
              key={ind.code}
              className="p-5 sm:p-6 bg-white border border-[#E0D8CB] rounded space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE4D9]">
                  <span className="font-mono text-xs font-bold text-[#B84C2A]">
                    {ind.code}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#191C21]" />
                </div>

                <h3 className="font-serif text-base font-medium text-[#191C21]">
                  {ind.title}
                </h3>

                <p className="font-mono text-[11px] text-[#7A8190] leading-snug">
                  {ind.scope}
                </p>

                <p className="text-xs text-[#525966] leading-relaxed pt-1">
                  {ind.support}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F2ECE3] border border-[#DDD5C7] rounded text-xs font-mono text-[#6A7180] text-center">
          Note: These descriptions represent our core target sectors and capability scope, not client logos or official government endorsements.
        </div>

      </div>
    </section>
  );
}
