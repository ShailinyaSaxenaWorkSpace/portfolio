import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Featured Products', href: '#products' },
    { name: 'Delivery Model', href: '#delivery-model' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Why Neudact', href: '#why-neudact' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6E0D5] py-2.5 shadow-[0_2px_12px_rgba(25,28,33,0.03)]'
          : 'bg-[#FBF9F5] border-b border-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Identity */}
          <a
            href="#"
            className="flex items-baseline gap-2 group text-[#191C21]"
            aria-label="Neudact Engineers - Home"
          >
            <span className="font-serif italic font-semibold text-lg sm:text-xl tracking-tight text-[#191C21]">
              Neudact Engineers
            </span>
            <span className="hidden lg:inline-block font-mono text-[11px] text-[#7A8190] tracking-wide">
              / Where Intelligence Meets Execution
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-wide text-[#575D6A] hover:text-[#191C21] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Brochure & Discuss Project */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Neudact_Engineers_Capabilities_Brochure.pdf"
              download="Neudact_Engineers_Capabilities_Brochure.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#575D6A] hover:text-[#191C21] hover:bg-[#F2ECE3] border border-[#DDD7CC] transition-colors"
              title="Download Capabilities Brochure (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#B84C2A]" />
              <span>Brochure (PDF)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded text-xs font-medium text-white bg-[#191C21] hover:bg-[#2E333D] transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B84C2A]" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="/Neudact_Engineers_Capabilities_Brochure.pdf"
              download="Neudact_Engineers_Capabilities_Brochure.pdf"
              className="p-1.5 text-[#575D6A] border border-[#DDD7CC] rounded"
              title="Download Capabilities Brochure (PDF)"
            >
              <FileText className="w-4 h-4 text-[#B84C2A]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#191C21] border border-[#DDD7CC] rounded bg-white/60"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FBF9F5] border-b border-[#E6E0D5] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#4E5564] hover:text-[#191C21] py-1 border-b border-[#F0EAE1]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 px-4 rounded text-xs font-semibold text-white bg-[#191C21] flex items-center justify-center gap-1"
            >
              <span>Discuss a Requirement</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
