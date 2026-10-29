import React from 'react';
import { CheckCircle2, ArrowRight, Cpu } from 'lucide-react';

export default function FeaturedProducts({ onSelectService }) {
  const handleProductInquiry = (productName) => {
    if (onSelectService) {
      onSelectService(productName === 'IREPS Tender Harvester' ? 'Tender Management & Procurement Support' : 'Security, CCTV & VMS');
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 border-b border-[#E6E0D5] bg-[#F4EFEA]/60 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#B84C2A]">
            <Cpu className="w-3.5 h-3.5" />
            <span>SPECIALIZED INTERNAL ASSETS &amp; PRODUCTS</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#191C21]">
            Featured Engineering Products
          </h2>
          
          <p className="text-base text-[#525966] leading-relaxed font-sans">
            Tools engineered by Neudact to eliminate operational friction in tender document processing and intelligent site monitoring.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* PRODUCT 1: IREPS TENDER HARVESTER */}
          <div className="bg-white border border-[#E0D8CB] rounded-lg p-6 sm:p-8 depth-card flex flex-col justify-between shadow-[0_4px_20px_rgba(25,28,33,0.04)]">
            <div className="space-y-6">
              
              {/* Product Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#EFE9DF]">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
                    RAILWAY &amp; E-PROCUREMENT AUTOMATION
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#191C21] mt-1">
                    IREPS Tender Harvester
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-direct shrink-0">
                  Production Tool
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#525966] leading-relaxed font-sans">
                A purpose-built automation tool designed for Indian Railways e-Procurement System (IREPS) contractors. It automates massive tender docket downloads, verifies file integrity, extracts BOQ schedules into structured Excel spreadsheets, and creates indexed, auditor-ready dossiers.
              </p>

              {/* Technical Spec Box */}
              <div className="p-4 rounded bg-[#FBF9F5] border border-[#EAE4D9] space-y-2.5 text-xs font-mono text-[#575D6A]">
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Download Engine:</span>
                  <span className="text-[#191C21] font-semibold">Headless Parallel Scraper</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Verification:</span>
                  <span className="text-[#191C21] font-semibold">SHA-256 Checksum Validation</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Output Format:</span>
                  <span className="text-[#191C21] font-semibold">Structured ZIP Dossier + Excel Matrix</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Time Saved:</span>
                  <span className="text-[#1E6B37] font-semibold">~4.5 Hours per Complex Tender</span>
                </div>
              </div>

              {/* Key Capabilities */}
              <ul className="space-y-2 text-xs text-[#4A5160]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Batch downloads all technical schedules, drawing sheets &amp; corrigenda</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Identifies corrupt or incomplete PDF attachments prior to bid preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Automatic BOQ line item aggregation for fast margin modeling</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#EFE9DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7A8190]">Available as Managed Service or Licensed Tool</span>
              <button
                onClick={() => handleProductInquiry('IREPS Tender Harvester')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors cursor-pointer"
              >
                <span>Request Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>

          {/* PRODUCT 2: NAYAN INTELLIGENCE PLATFORM */}
          <div className="bg-white border border-[#E0D8CB] rounded-lg p-6 sm:p-8 depth-card flex flex-col justify-between shadow-[0_4px_20px_rgba(25,28,33,0.04)]">
            <div className="space-y-6">
              
              {/* Product Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#EFE9DF]">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#1A549E] uppercase tracking-wider block">
                    COMPUTER VISION &amp; SITE MONITORING
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#191C21] mt-1">
                    NAYAN Vision Suite
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-partner shrink-0">
                  Beta Framework
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#525966] leading-relaxed font-sans">
                An edge-compatible computer vision framework engineered for industrial job sites, solar arrays, and high-security yards. NAYAN processes RTSP video streams locally to detect safety compliance (helmets, vests), perimeter intrusions, and equipment activity logs without high cloud transit costs.
              </p>

              {/* Technical Spec Box */}
              <div className="p-4 rounded bg-[#FBF9F5] border border-[#EAE4D9] space-y-2.5 text-xs font-mono text-[#575D6A]">
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Stream Protocols:</span>
                  <span className="text-[#191C21] font-semibold">RTSP / ONVIF IP Feeds</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Deployment:</span>
                  <span className="text-[#191C21] font-semibold">On-Prem Edge Box / NVR Gateway</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Inference Engine:</span>
                  <span className="text-[#191C21] font-semibold">Optimized TensorRT / ONNX</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8F96A3]">Privacy Guarantee:</span>
                  <span className="text-[#1E6B37] font-semibold">Local Processing (Zero Cloud Leak)</span>
                </div>
              </div>

              {/* Key Capabilities */}
              <ul className="space-y-2 text-xs text-[#4A5160]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Real-time PPE safety non-compliance flagging on active civil yards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Configurable virtual tripwires for unauthorized nocturnal intrusion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0" />
                  <span>Instant Telegram and Webhook event dispatches with video snapshot</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#EFE9DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7A8190]">Pilot Testing on Select Site Deployments</span>
              <button
                onClick={() => handleProductInquiry('NAYAN Vision Suite')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors cursor-pointer"
              >
                <span>Inquire About Pilot</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
