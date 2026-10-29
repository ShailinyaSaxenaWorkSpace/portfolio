import React from 'react';
import { ShieldCheck, Users, Truck, Check } from 'lucide-react';

export default function DeliveryModel() {
  return (
    <section id="delivery-model" className="py-20 sm:py-24 border-b border-[#E6E0D5] bg-[#FBF9F5] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F2ECE3] border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#B84C2A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY IN EXECUTION</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#191C21]">
            Our Delivery Model
          </h2>
          
          <p className="text-base text-[#525966] leading-relaxed font-sans">
            We believe commercial credibility begins with complete operational honesty. Neudact Engineers does not claim to manufacture every component or directly employ thousands of specialists. Instead, we structure our work across three transparent delivery modes.
          </p>
        </div>

        {/* Three Tier Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Tier 1: Direct Delivery */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE9DF]">
              <span className="text-[11px] font-mono font-bold text-[#1E6B37]">TIER 01 / DIRECT</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-direct font-medium">Direct Delivery</span>
            </div>
            
            <div className="p-2.5 w-fit rounded bg-[#EBF3ED] text-[#1E6B37]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-medium text-[#191C21]">
              Delivered Directly by Neudact
            </h3>

            <p className="text-xs text-[#525966] leading-relaxed">
              Services and software developed in-house by Neudact Engineers. Our engineering core handles architecture, codebase creation, bid compliance compilation, and direct technical execution.
            </p>

            <div className="pt-2 border-t border-[#EFE9DF] space-y-2 text-xs text-[#6A7180]">
              <div className="font-mono text-[11px] font-semibold text-[#191C21]">Includes:</div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1E6B37] shrink-0 mt-0.5" />
                  <span>Custom web applications &amp; React engineering portals</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1E6B37] shrink-0 mt-0.5" />
                  <span>End-to-end tender research, NIT audit &amp; Excel sheets</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1E6B37] shrink-0 mt-0.5" />
                  <span>IREPS Harvester tool &amp; bespoke AI automation agents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 2: Specialist Partners */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE9DF]">
              <span className="text-[11px] font-mono font-bold text-[#1A549E]">TIER 02 / PARTNERS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-partner font-medium">Specialist Partner</span>
            </div>
            
            <div className="p-2.5 w-fit rounded bg-[#EFF4FA] text-[#1A549E]">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-medium text-[#191C21]">
              Delivered via Specialist Partners
            </h3>

            <p className="text-xs text-[#525966] leading-relaxed">
              Complex or licensed engineering solutions delivered in coordination with vetted, accredited domain partners. Neudact manages project scoping, technical translation, quality audits, and single-point delivery.
            </p>

            <div className="pt-2 border-t border-[#EFE9DF] space-y-2 text-xs text-[#6A7180]">
              <div className="font-mono text-[11px] font-semibold text-[#191C21]">Includes:</div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1A549E] shrink-0 mt-0.5" />
                  <span>Solar plant Single Line Diagram (SLD) drawings</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1A549E] shrink-0 mt-0.5" />
                  <span>Fiber-optic telecom &amp; industrial SCADA networking</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1A549E] shrink-0 mt-0.5" />
                  <span>Embedded electronics &amp; custom sub-assembly prototyping</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 3: Sourced Solutions */}
          <div className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE9DF]">
              <span className="text-[11px] font-mono font-bold text-[#A34E1A]">TIER 03 / SOURCING</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-sourced font-medium">Sourced Solution</span>
            </div>
            
            <div className="p-2.5 w-fit rounded bg-[#FAF2EC] text-[#A34E1A]">
              <Truck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-medium text-[#191C21]">
              Sourced from Verified Suppliers
            </h3>

            <p className="text-xs text-[#525966] leading-relaxed">
              Procurement coordination and specification matching for industrial hardware. We identify certified OEMs, compare technical datasheets, verify warranty compliance, and handle supply-chain logistics.
            </p>

            <div className="pt-2 border-t border-[#EFE9DF] space-y-2 text-xs text-[#6A7180]">
              <div className="font-mono text-[11px] font-semibold text-[#191C21]">Includes:</div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#A34E1A] shrink-0 mt-0.5" />
                  <span>CCTV cameras, NVRs &amp; storage SAN infrastructure</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#A34E1A] shrink-0 mt-0.5" />
                  <span>Solar BoS components, inverters &amp; DC protection gear</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#A34E1A] shrink-0 mt-0.5" />
                  <span>Commercial UAV / drone platforms (subject to approvals)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
