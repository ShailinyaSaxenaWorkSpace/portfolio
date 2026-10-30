import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, FileText, 
  HelpCircle, ArrowLeft, Mail, ExternalLink, ShieldAlert 
} from 'lucide-react';

export default function ServiceDetailTemplate({ service, onSelectService, onNavigateHome, onNavigateService }) {
  useEffect(() => {
    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title and meta description dynamically
    if (service?.metaTitle) {
      document.title = service.metaTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && service?.metaDescription) {
      metaDesc.setAttribute('content', service.metaDescription);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && service?.path) {
      canonical.setAttribute('href', `https://neudact-engineers.vercel.app${service.path}`);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="py-32 text-center max-w-xl mx-auto px-4 font-sans">
        <h2 className="font-serif text-2xl font-medium text-[#191C21]">Service Not Found</h2>
        <p className="text-sm text-[#575D6A] mt-2">The requested service page does not exist.</p>
        <button
          onClick={onNavigateHome}
          className="mt-6 px-4 py-2 rounded bg-[#191C21] text-white text-xs font-mono font-medium cursor-pointer"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  const handleDiscussThisService = () => {
    if (onSelectService) {
      onSelectService(service.category || service.h1);
    }
    onNavigateHome();
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Structured Data for Service & Breadcrumbs
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Neudact Engineers",
      "url": "https://neudact-engineers.vercel.app/",
      "logo": "https://neudact-engineers.vercel.app/favicon.svg",
      "telephone": "+91-9354249637",
      "email": "neudact@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": service.category,
    "url": `https://neudact-engineers.vercel.app${service.path}`
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://neudact-engineers.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://neudact-engineers.vercel.app/#solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.h1,
        "item": `https://neudact-engineers.vercel.app${service.path}`
      }
    ]
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    })) || []
  };

  return (
    <article className="pt-24 pb-20 sm:pt-32 sm:pb-28 bg-[#FBF9F5] text-[#191C21] font-sans">
      {/* Inject Specific Structured Data for this Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      {service.faqs && service.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6A7180] pb-4 border-b border-[#EAE4D9]">
          <button 
            onClick={onNavigateHome} 
            className="hover:text-[#191C21] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button 
            onClick={() => {
              onNavigateHome();
              setTimeout(() => {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }} 
            className="hover:text-[#191C21] transition-colors cursor-pointer"
          >
            Services
          </button>
          <span>/</span>
          <span className="text-[#191C21] font-medium truncate max-w-xs">{service.h1}</span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded font-medium ${service.deliveryBadgeClass || 'badge-direct'}`}>
              {service.deliveryType}
            </span>
            <span className="font-mono text-xs text-[#7A8190]">
              Category: {service.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#191C21] leading-tight">
            {service.h1}
          </h1>

          <p className="text-base sm:text-lg text-[#525966] leading-relaxed max-w-3xl">
            {service.summary}
          </p>

          {/* Quick Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDiscussThisService}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-sans text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] transition-colors shadow-sm cursor-pointer"
            >
              <span>Request Quotation / Scope Discussion</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B84C2A]" />
            </button>

            <a
              href="/Neudact_Engineers_Capabilities_Brochure.pdf"
              download="Neudact_Engineers_Capabilities_Brochure.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#575D6A] hover:text-[#B84C2A] transition-colors"
              title="Download Capabilities Brochure (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#B84C2A]" />
              <span className="underline underline-offset-4">Capabilities Brochure (PDF)</span>
            </a>
          </div>
        </header>

        {/* Compliance Notice (if applicable) */}
        {service.complianceNotice && (
          <div className="p-4 rounded bg-[#FAF2EC] border border-[#EDD2BE] text-xs text-[#A34E1A] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-mono font-bold uppercase tracking-wider block">Statutory &amp; Regulatory Compliance Notice</span>
              <p className="leading-relaxed">{service.complianceNotice}</p>
            </div>
          </div>
        )}

        {/* Target Audience & Customers */}
        <section className="p-6 sm:p-7 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-3">
          <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
            Target Clients &amp; Organizations
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
            Who This Service Is Engineered For
          </h2>
          <p className="text-sm text-[#525966] leading-relaxed">
            {service.targetAudience}
          </p>
        </section>

        {/* Detailed Service Scope */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
              Execution Scope
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#191C21]">
              Detailed Capabilities &amp; Work Scope
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.scopeItems?.map((item, index) => (
              <div 
                key={index} 
                className="p-4 bg-white border border-[#E0D8CB] rounded flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1E6B37] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-[13px] text-[#4E5564] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Outputs */}
        <section className="p-6 sm:p-8 bg-white border border-[#E0D8CB] rounded-lg depth-card space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#1E6B37] uppercase tracking-wider block">
              Tangible Outputs
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#191C21]">
              What You Receive as Deliverables
            </h2>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-[#4E5564]">
            {service.deliverables?.map((deliv, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E6B37] mt-2 shrink-0" />
                <span className="leading-relaxed">{deliv}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Methodology & Delivery Model Transparency */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#191C21] uppercase tracking-wider block">
              Engineering Methodology
            </span>
            <h3 className="font-serif text-lg font-medium text-[#191C21]">
              How We Deliver Quality
            </h3>
            <p className="text-xs sm:text-[13px] text-[#525966] leading-relaxed">
              {service.methodology}
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E0D8CB] rounded-lg space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
              Delivery Transparency
            </span>
            <h3 className="font-serif text-lg font-medium text-[#191C21]">
              Direct vs. Partner Responsibilities
            </h3>
            <div className="space-y-2 text-xs text-[#525966] leading-relaxed">
              <div>
                <strong className="text-[#191C21]">Direct In-House:</strong> {service.responsibilities?.direct}
              </div>
              <div>
                <strong className="text-[#191C21]">Partner / Sourced:</strong> {service.responsibilities?.partner}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Terminology & Industry Standards */}
        <section className="p-6 bg-[#F4EFEA]/70 border border-[#DDD7CC] rounded-lg space-y-3">
          <span className="text-[11px] font-mono font-bold text-[#7A8190] uppercase tracking-wider block">
            Domain Standards &amp; Terminology
          </span>
          <h2 className="font-serif text-lg font-medium text-[#191C21]">
            Relevant Technical Specifications &amp; Standards
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {service.technicalTerms?.map((term, index) => (
              <span key={index} className="px-2.5 py-1 rounded bg-white border border-[#D5CEBE] text-xs font-mono text-[#4A5160]">
                {term}
              </span>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
                Clarity &amp; Answers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#191C21]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="p-5 bg-white border border-[#E0D8CB] rounded-lg space-y-2">
                  <h3 className="font-serif text-base font-medium text-[#191C21] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B84C2A] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#525966] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Services Internal Links */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <section className="pt-6 border-t border-[#EAE4D9] space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#7A8190] uppercase tracking-wider block">
              Related Solutions
            </span>
            <div className="grid sm:grid-cols-3 gap-4">
              {service.relatedServices.map((rel, index) => {
                const targetSlug = rel.path.replace('/services/', '');
                return (
                  <button
                    key={index}
                    onClick={() => onNavigateService(targetSlug)}
                    className="p-4 bg-white border border-[#E0D8CB] rounded text-left hover:border-[#191C21] transition-colors group cursor-pointer"
                  >
                    <span className="text-xs font-serif font-medium text-[#191C21] group-hover:text-[#B84C2A] flex items-center justify-between">
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[11px] font-mono text-[#7A8190] mt-1 block">Read service specification</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Inquiry & Quotation Callout */}
        <section className="p-8 rounded-lg bg-[#191C21] text-white space-y-4">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold text-[#B84C2A] uppercase tracking-wider block">
              Direct Consultation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium">
              Discuss Your Requirement for {service.h1}
            </h2>
            <p className="text-xs sm:text-sm text-[#A5ACB9] leading-relaxed max-w-2xl font-sans">
              Share your project drawings, NIT tender numbers, or software specifications. We provide a structured evaluation and transparent quotation within 24 business hours.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDiscussThisService}
              className="px-5 py-2.5 rounded font-sans text-xs font-semibold text-[#191C21] bg-white hover:bg-[#F2ECE3] transition-colors cursor-pointer"
            >
              Open Requirement Form
            </button>
            <a
              href="mailto:neudact@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded font-mono text-xs text-[#E6E0D5] border border-[#3A4150] hover:bg-[#2A303C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B84C2A]" />
              <span>neudact@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919354249637"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded font-mono text-xs text-emerald-400 border border-[#3A4150] hover:bg-[#2A303C] transition-colors"
            >
              <span>WhatsApp: +91 93542 49637</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

      </div>
    </article>
  );
}
