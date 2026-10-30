import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { SERVICE_PAGES } from '../data/servicePagesData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onNavigateService }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceKeys = Object.keys(SERVICE_PAGES);

  return (
    <footer className="py-14 sm:py-16 bg-[#F4EFEA] border-t border-[#E6E0D5] text-[#5A606E] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid sm:grid-cols-12 gap-8 pb-10 border-b border-[#DFD7CB]">
          
          {/* Identity & Company Summary */}
          <div className="sm:col-span-4 space-y-3">
            <img
              src="/neudact-logo.png"
              alt="Neudact Engineers Logo"
              className="h-9 w-auto object-contain"
              width="180"
              height="40"
            />
            <p className="font-mono text-xs text-[#B84C2A]">
              Where Intelligence Meets Execution.
            </p>
            <p className="text-xs text-[#525966] max-w-sm leading-relaxed">
              Delivering precision engineering schematics, turnkey public procurement support, custom software architecture, and industrial technology sourcing across India with complete delivery transparency.
            </p>
            <p className="font-mono text-[11px] text-[#7A8190] pt-1">
              Gurugram, Haryana, India (IST / UTC+5:30)
            </p>
          </div>

          {/* Dedicated Service Pages Directory for Search & AI Indexing */}
          <div className="sm:col-span-5 space-y-2 font-mono text-[11px]">
            <span className="text-[#191C21] font-semibold block uppercase tracking-wider">
              Service Directory &amp; Specifications
            </span>
            <ul className="grid grid-cols-1 gap-1 text-[#5A606E]">
              {serviceKeys.map((key) => {
                const s = SERVICE_PAGES[key];
                return (
                  <li key={key}>
                    <a
                      href={s.path}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigateService) onNavigateService(key);
                      }}
                      className="text-left hover:text-[#191C21] hover:underline cursor-pointer transition-colors truncate max-w-xs block"
                    >
                      {s.h1}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Direct Contacts & Profiles */}
          <div className="sm:col-span-3 space-y-2 font-mono text-[11px]">
            <span className="text-[#191C21] font-semibold block uppercase tracking-wider">
              Direct &amp; Verification
            </span>
            <ul className="space-y-1.5 text-[#5A606E]">
              <li>
                <a href="mailto:neudact@gmail.com" className="hover:text-[#191C21] underline underline-offset-2">
                  neudact@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919354249637" className="hover:text-[#191C21]">
                  +91 93542 49637
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shailinya-saxena-%F0%9F%87%AE%F0%9F%87%B3-270b35208"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Neudact Engineers on LinkedIn"
                  className="hover:text-[#191C21] inline-flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/neudact_engineers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Neudact Engineers on Instagram"
                  className="hover:text-[#191C21] inline-flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>Instagram (@neudact_engineers)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShailinyaSaxenaWorkSpace"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Neudact Engineers GitHub Repository"
                  className="hover:text-[#191C21] inline-flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#191C21]" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/Neudact_Engineers_Capabilities_Brochure.pdf"
                  download="Neudact_Engineers_Capabilities_Brochure.pdf"
                  className="inline-flex items-center gap-1.5 text-[#B84C2A] font-semibold hover:underline"
                  title="Download Capabilities Brochure (PDF)"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Capabilities Brochure (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Slogan & Scroll-to-Top */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#7A8190]">
          <div>
            &copy; {CURRENT_YEAR} Neudact Engineers. Operational Base: Gurugram, Haryana, India. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block">Disciplined Engineering &amp; Procurement Execution</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#191C21] hover:text-[#B84C2A] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
