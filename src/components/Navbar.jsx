import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onNavigateHome, currentRoute }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (currentRoute !== '/') {
      onNavigateHome();
      setTimeout(() => {
        if (href.startsWith('#')) {
          const targetId = href.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (href.startsWith('#')) {
        const targetId = href.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          
          {/* Identity with Official Logo */}
          <button
            onClick={() => onNavigateHome()}
            className="flex items-center gap-3 group text-[#191C21] cursor-pointer text-left"
            aria-label="Neudact Engineers - Home"
          >
            <img
              src="/neudact-logo.png"
              alt="Neudact Engineers Logo"
              className="h-8 sm:h-9 w-auto object-contain shrink-0"
              width="180"
              height="40"
            />
            <span className="hidden lg:inline-block font-mono text-[11px] text-[#7A8190] tracking-wide border-l border-[#DDD7CC] pl-3 py-1">
              Where Intelligence Meets Execution
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs font-medium tracking-wide text-[#575D6A] hover:text-[#191C21] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
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

            <button
              onClick={() => handleLinkClick('#contact')}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded text-xs font-medium text-white bg-[#191C21] hover:bg-[#2E333D] transition-colors cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B84C2A]" />
            </button>
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
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-sm font-medium text-[#4E5564] hover:text-[#191C21] py-1 border-b border-[#F0EAE1] cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('#contact')}
              className="w-full py-2 px-4 rounded text-xs font-semibold text-white bg-[#191C21] flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Discuss a Requirement</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B84C2A]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
