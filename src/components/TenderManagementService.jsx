import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TenderManagementService({ onSelectService }) {

  const tenderStages = [
    {
      num: '01',
      title: 'Tender Discovery & Screening',
      tagline: 'Systematic opportunity identification across public procurement portals',
      points: [
        'Tender identification across relevant government, PSU, railway, GeM, e-procurement, and state portals (CPPP, IREPS, State e-Proc).',
        'Targeted searches filtered by industry, contract value, geographic location, scope of work, and company technical capabilities.',
        'Immediate downloading, indexing, and structured cloud organization of tender notices and annexures.',
        'Deadline, pre-bid meeting, and corrigendum tracking to prevent missed milestones.',
        'Executive opportunity summaries and initial qualification screening for management go/no-go decisions.'
      ]
    },
    {
      num: '02',
      title: 'Detailed Tender Analysis',
      tagline: 'Deep clause-by-clause review of commercial terms and qualification criteria',
      points: [
        'Rigorous review of NIT, RFP, BOQ, General Conditions of Contract (GCC), and Special Conditions of Contract (SCC).',
        'Technical eligibility evaluation against specified completed works, client types, and equipment criteria.',
        'Financial eligibility calculation including 3-year average annual turnover, minimum net worth, and working capital liquidity.',
        'Evaluation of similar work experience definitions, credential validity, and completion certificate requirements.',
        'Verification of EMD / Bid Security, Performance Bank Guarantee (PBG), and security deposit modalities.',
        'Detailed assessment of payment milestones, retention money, price variation clauses, liquidated damages (LD), and penalty clauses.',
        'Identification of fatal disqualification risks, restrictive specifications, and documentation gaps.'
      ]
    },
    {
      num: '03',
      title: 'Bid Documentation & Compliance',
      tagline: 'Preparation of exhaustive compliance matrices and cover-wise document compilation',
      points: [
        'Tender-specific document checklists covering all mandatory covers and packet schedules.',
        'Technical bid preparation, technical schedule compilation, and methodology write-ups.',
        'Commercial and financial document coordination with company accounts and finance leads.',
        'Clause-by-clause compliance matrix preparation (Technical Specifications & Commercial Conditions).',
        'Drafting of required declarations, undertakings, integrity pacts, and format affidavits based on authentic client data.',
        'Company profile, ISO certifications, and credential organization tailored to the tender.',
        'Turnover certificates, balance sheets, and experience documentation coordination.',
        'Joint Venture (JV), consortium, and OEM authorization (MAF) documentation coordination where applicable.',
        'Pre-bid query drafting with precise clause references and tracking of authority clarifications.',
        'Strict document indexing, standardized naming conventions, and version control.'
      ]
    },
    {
      num: '04',
      title: 'Bid Preparation & Quality Review',
      tagline: 'Exhaustive pre-submission verification and audit of the complete bid dossier',
      points: [
        'Requirement-by-requirement compliance checks against all NIT and corrigenda conditions.',
        'Verification of mandatory attachments, formats, stamps, authorizations, and annexures.',
        'Cross-checking tender conditions against authentic company documents to prevent contradictions.',
        'Technical submission review to ensure complete alignment with the required scope of work.',
        'Bill of Quantities (BOQ) structure and commercial document verification.',
        'Generation of missing-document, ambiguity, and inconsistency audit reports.',
        'Final submission-readiness sign-off checklist.',
        'Strict deadline and milestone deliverable coordination.'
      ]
    },
    {
      num: '05',
      title: 'Online Bid Submission Support',
      tagline: 'Structured upload coordination and verification on designated e-procurement portals',
      points: [
        'Tender-portal submission planning, server load anticipation, and timeline scheduling.',
        'Document upload sequence assistance on applicable portals (GeM, CPPP, IREPS, State Portals).',
        'Coordination of Class-3 Digital Signature Certificate (DSC) and authorized signatory requirements.',
        'Verification of upload status, file hash integrity, and mandatory cover attachments.',
        'Submission deadline coordination ensuring submission well in advance of closing hours.',
        'Verification, downloading, and secure archiving of submission receipts, bid tokens, and acknowledgements.',
        'Final post-upload submission status reporting to company management.'
      ],
      notice: 'Important: Actual portal submission must be performed by the client or an appropriately authorized person where permitted by portal rules and applicable law. Neudact Engineers never promises unauthorized portal access, DSC usage, or submission completion without proper legal authorization and verified documents.'
    },
    {
      num: '06',
      title: 'Post-Submission & Contract Support',
      tagline: 'Bid lifecycle continuity, technical opening monitoring, and contract onboarding',
      points: [
        'Tender status tracking, technical opening monitoring, and post-bid corrigendum surveillance.',
        'Coordination of technical clarifications and additional documentation requested by the procuring department.',
        'Drafting formal responses to queries raised during technical evaluation, strictly based on client-approved information.',
        'Archiving and lifecycle management of complete submission records and bid dossiers.',
        'Letter of Award (LOA) and contract-document checklist verification.',
        'Coordination of Performance Security, contract agreement signing, and post-award initial documentation where agreed.',
        'Ongoing tender pipeline reporting and recurring tender-desk advisory.'
      ]
    }
  ];

  const packages = [
    {
      code: 'PKG A',
      name: 'Tender Discovery & Screening',
      target: 'For businesses needing relevant opportunities identified and initially assessed.',
      features: [
        'Targeted tender discovery across GeM, CPPP, IREPS & state portals',
        'Opportunity screening matched to your turnover and capability',
        'Executive eligibility and Pre-Qualification summaries',
        'Direct tender document download links & organized dossier',
        'Submission deadline & corrigenda monitoring calendar'
      ],
      ctaText: 'Inquire for Package A'
    },
    {
      code: 'PKG B',
      name: 'Complete Bid Preparation & Submission Support',
      highlighted: true,
      target: 'For businesses needing end-to-end structured assistance throughout the tender lifecycle.',
      features: [
        'Detailed NIT, RFP, BOQ & contractual condition analysis',
        'Technical & financial eligibility audit and gap mitigation',
        'Exhaustive compliance matrices (Technical & Commercial)',
        'Checklists, format undertakings & document compilation',
        'Rigorous quality review & missing-document audit',
        'Portal upload coordination & DSC verification assistance',
        'Submission receipt archiving & post-submission monitoring'
      ],
      ctaText: 'Inquire for Package B'
    },
    {
      code: 'PKG C',
      name: 'Dedicated Tender Management Desk',
      target: 'For contractors and EPC firms bidding actively and regularly on public tenders.',
      features: [
        'Recurring multi-portal tender searches & pipeline management',
        'Continuous eligibility screening for upcoming opportunities',
        'Rolling compliance matrices & standardized document library',
        'Dedicated pre-bid query drafting and corrigenda tracking',
        'Multi-bid coordination across concurrent tender submissions',
        'Agreed periodic pipeline & qualification reporting'
      ],
      ctaText: 'Inquire for Package C'
    }
  ];

  const handleTenderCTA = (packageOrService) => {
    if (onSelectService) {
      if (packageOrService === 'PKG A') {
        onSelectService('Tender Discovery & Screening');
      } else if (packageOrService === 'PKG B' || packageOrService === 'general') {
        onSelectService('End-to-End Tender Management');
      } else if (packageOrService === 'PKG C') {
        onSelectService('End-to-End Tender Management');
      } else {
        onSelectService('End-to-End Tender Management');
      }
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tender-management" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 02 · Specialist Service
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              End-to-End Tender Management &amp; Bid Support
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#4E5564] leading-relaxed">
              We support businesses throughout the tender lifecycle, from identifying relevant opportunities and evaluating eligibility to preparing bid documentation, coordinating online submissions, and managing post-submission requirements.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleTenderCTA('general')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm"
              >
                <span>Discuss Your Tender Requirements</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>
        </div>

        {/* 6-Stage Tender Lifecycle Interactive/Detailed View */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#EAE4D9]">
            <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
              The 6-Stage Tender Lifecycle
            </span>
            <span className="font-mono text-[11px] text-[#7A8190]">
              From Identification to Contract Onboarding
            </span>
          </div>

          <div className="space-y-6">
            {tenderStages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 sm:p-8 bg-white border border-[#E0D8CB] rounded-lg space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EFE9DF]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#B84C2A] bg-[#B84C2A]/10 px-2.5 py-1 rounded">
                      STAGE {stage.num}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#7A8190]">
                    {stage.tagline}
                  </span>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-1">
                  {stage.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#4E5564] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#191C21] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {stage.notice && (
                  <div className="p-3.5 bg-[#FAF6EE] border-l-2 border-[#B84C2A] text-xs text-[#5D5545] rounded-r leading-relaxed">
                    <span className="font-semibold text-[#191C21]">Governance Note: </span>
                    {stage.notice}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tender Service Packages (A, B, C) */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#EAE4D9]">
            <div>
              <span className="font-mono text-xs font-bold text-[#B84C2A] block uppercase">
                Structured Engagement
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#191C21] pt-0.5">
                Tender Service Packages
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#7A8190]">
              Transparent Scope · Tailored Deliverables
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.code}
                className={`p-6 sm:p-7 rounded-lg flex flex-col justify-between border ${
                  pkg.highlighted
                    ? 'bg-[#FFFFFF] border-[#191C21] shadow-md ring-1 ring-[#191C21]'
                    : 'bg-[#FAF7F2] border-[#E0D8CB]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D9]">
                    <span className="font-mono text-xs font-bold text-[#B84C2A]">
                      {pkg.code}
                    </span>
                    {pkg.highlighted && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#191C21] text-white">
                        Most Comprehensive
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#191C21]">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-[#6A7180] pt-1">
                      {pkg.target}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-3 border-t border-[#EAE4D9]">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#4E5564] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B84C2A] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE4D9]">
                  <button
                    onClick={() => handleTenderCTA(pkg.code)}
                    className={`w-full py-2.5 px-4 rounded text-xs font-semibold text-center transition-colors ${
                      pkg.highlighted
                        ? 'bg-[#191C21] text-white hover:bg-[#303642]'
                        : 'bg-white border border-[#DDD5C7] text-[#191C21] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Disclaimer / Integrity Standard */}
        <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#DDD5C5] rounded-md text-xs text-[#5A606E] space-y-2">
          <div className="flex items-center gap-2 font-mono font-semibold text-[#191C21]">
            <ShieldCheck className="w-4 h-4 text-[#B84C2A]" />
            <span>Integrity &amp; Professional Compliance Standard</span>
          </div>
          <p className="leading-relaxed">
            Neudact Engineers provides structured research, documentation coordination, and analytical compliance support. Tender support does not guarantee bidder qualification, technical acceptance, or contract awards. We strictly work with authentic client-provided data and do not fabricate credentials, certificates, turnover data, or experience records. Regulated certifications, statutory audits, and formal legal opinions must be provided by appropriately qualified statutory professionals.
          </p>
        </div>

      </div>
    </section>
  );
}
