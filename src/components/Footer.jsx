import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 sm:py-16 bg-[#F4EFEA] border-t border-[#E6E0D5] text-[#5A606E] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid sm:grid-cols-12 gap-8 pb-10 border-b border-[#DFD7CB]">
          
          <div className="sm:col-span-5 space-y-2.5">
            <p className="font-serif italic font-semibold text-base text-[#191C21]">
              Neudact Engineers
            </p>
            <p className="font-mono text-xs text-[#B84C2A]">
              Where Intelligence Meets Execution.
            </p>
            <p className="text-xs text-[#525966] max-w-sm leading-relaxed">
              An engineering and technology solutions partner providing direct digital services, project coordination, product sourcing, and specialist partner-delivered solutions for businesses, infrastructure companies, EPC contractors, and government-facing organizations.
            </p>
            <p className="font-mono text-[11px] text-[#7A8190] pt-1">
              Gurugram, Haryana, India (IST / UTC+5:30)
            </p>
          </div>

          <div className="sm:col-span-3 space-y-2 font-mono text-[11px]">
            <span className="text-[#191C21] font-semibold block uppercase tracking-wider">
              Navigation
            </span>
            <ul className="space-y-1.5 text-[#5A606E]">
              <li><a href="#solutions" className="hover:text-[#191C21]">Core Solutions</a></li>
              <li><a href="#products" className="hover:text-[#191C21]">Featured Products</a></li>
              <li><a href="#delivery-model" className="hover:text-[#191C21]">Delivery Model</a></li>
              <li><a href="#industries" className="hover:text-[#191C21]">Target Industries</a></li>
              <li><a href="#work" className="hover:text-[#191C21]">Selected Work</a></li>
              <li><a href="#why-neudact" className="hover:text-[#191C21]">Why Neudact</a></li>
              <li><a href="#about" className="hover:text-[#191C21]">About Neudact</a></li>
              <li><a href="#contact" className="hover:text-[#191C21]">Discuss Requirement</a></li>
            </ul>
          </div>

          <div className="sm:col-span-4 space-y-2 font-mono text-[11px]">
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
                  rel="noreferrer"
                  className="hover:text-[#191C21] inline-flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3 h-3 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShailinyaSaxenaWorkSpace"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#191C21] inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-3 h-3 text-[#191C21]" />
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
                  <span>Download Brochure (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#7A8190]">
          <p>
            &copy; {CURRENT_YEAR} Neudact Engineers. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#5A606E] hover:text-[#191C21] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
