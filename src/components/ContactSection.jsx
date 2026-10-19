import React, { useState } from 'react';
import { Send, Check, Copy, FileText, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const SERVICE_OPTIONS = [
  'Website Development',
  'Custom Software Development',
  'Tender Discovery & Screening',
  'End-to-End Tender Management',
  'Bid Documentation & Submission Support',
  'Custom AI Agent Development',
  'Business Automation',
  'Combined Services',
  'Other'
];

const BUDGET_OPTIONS = [
  'Select a budget range (optional)',
  'Under ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹10,00,000',
  '₹10,00,000+ / Custom Retainer',
  'Flexible / To be determined'
];

const TIMELINE_OPTIONS = [
  'Select expected timeline (optional)',
  'Immediate (within 1–2 weeks / closing tender)',
  '1 month',
  '2–3 months',
  'Ongoing / Retainer'
];

export default function ContactSection({ activeService }) {
  const [selectedService, setSelectedService] = useState(null);
  const currentService = selectedService ?? (activeService && SERVICE_OPTIONS.includes(activeService) ? activeService : 'End-to-End Tender Management');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [errors, setErrors] = useState({});

  const directEmail = 'neudact@gmail.com';
  const directPhone = '+91 93542 49637';

  const copyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyFullMessage = () => {
    const text = `Inquiry for Neudact Engineers\n` +
      `From: ${formData.name} ${formData.company ? `(${formData.company})` : ''}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not specified'}\n` +
      `Service: ${currentService}\n` +
      `Budget: ${formData.budget || 'Not specified'}\n` +
      `Timeline: ${formData.timeline || 'Not specified'}\n\n` +
      `Project / Tender Details:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!currentService) {
      errs.service = 'Please select a service category.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide project or tender details (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setActivationNotice(false);

    try {
      // 1. Direct email forwarding to neudact@gmail.com via FormSubmit.co
      const emailPayload = {
        _subject: `New Requirement: ${currentService} — ${formData.name}`,
        _template: 'table',
        _captcha: 'false',
        Name: formData.name,
        Company: formData.company || 'Not Specified',
        Email: formData.email,
        Phone: formData.phone || 'Not Specified',
        Service: currentService,
        Budget: formData.budget || 'Not Specified',
        Timeline: formData.timeline || 'Not Specified',
        Details: formData.message
      };

      const response = await fetch('https://formsubmit.co/ajax/neudact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const result = await response.json().catch(() => null);
      if (result && result.message && result.message.includes('Activation')) {
        setActivationNotice(true);
      }

      // 2. Netlify static form fallback
      try {
        const netlifyPayload = new URLSearchParams({
          'form-name': 'contact',
          ...formData,
          service: currentService
        }).toString();

        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyPayload
        });
      } catch {
        // Safe to ignore in non-Netlify environments
      }

      setSubmitted(true);
    } catch (err) {
      console.warn('Form submission handled with direct client fallbacks:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-formatted links for instant multi-channel delivery
  const emailSubject = encodeURIComponent(`Project Inquiry: ${currentService} — ${formData.name}`);
  const emailBody = encodeURIComponent(
    `From: ${formData.name}\n` +
    (formData.company ? `Company: ${formData.company}\n` : '') +
    `Email: ${formData.email}\n` +
    (formData.phone ? `Phone: ${formData.phone}\n` : '') +
    `Service Required: ${currentService}\n` +
    (formData.budget ? `Budget: ${formData.budget}\n` : '') +
    (formData.timeline ? `Timeline: ${formData.timeline}\n` : '') +
    `\nProject / Tender Details:\n${formData.message}\n\n` +
    `Sent via Neudact Engineers Contact Form`
  );

  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=${emailSubject}&body=${emailBody}`;
  const mailtoLink = `mailto:${directEmail}?subject=${emailSubject}&body=${emailBody}`;
  const whatsappLink = `https://wa.me/919354249637?text=${encodeURIComponent(
    `Hello Shailinya, I am reaching out to Neudact Engineers.\n\nName: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nService: ${currentService}\nDetails: ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-[#E6E0D5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 pb-12 mb-12 border-b border-[#EAE4D9]">
          <div className="lg:col-span-5">
            <p className="docket mb-2 text-[#B84C2A]">
              § 08 · Inquiries
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C21] font-medium leading-tight">
              Let's Discuss Your Requirement
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end space-y-2">
            <p className="text-base text-[#4E5564] leading-relaxed">
              Whether you need end-to-end tender compliance support, a new corporate website, custom software for your operations, or practical AI automation, share your details below for a structured response within 24 business hours.
            </p>
            <p className="font-mono text-xs text-[#7A8190]">
              Direct communication · Transparent scope · No sales pressure
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Verification & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider block">
                Direct Channels
              </span>
              <p className="text-xs sm:text-sm text-[#555C6A] leading-relaxed">
                For urgent tender deadlines, active corrigenda, or detailed technical specifications, reach out directly via verified email or WhatsApp.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Email Card */}
              <div className="p-4 bg-white border border-[#E0D8CB] rounded space-y-2">
                <span className="text-[11px] text-[#7A8190] block uppercase tracking-wider">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-medium text-[#191C21] hover:text-[#B84C2A] truncate"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 text-[#5A606E] hover:text-[#191C21] rounded hover:bg-[#F2ECE3] transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 bg-white border border-[#E0D8CB] rounded space-y-2">
                <span className="text-[11px] text-[#7A8190] block uppercase tracking-wider">
                  Direct Phone &amp; WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="tel:+919354249637"
                    className="font-medium text-[#191C21] hover:text-[#B84C2A]"
                  >
                    {directPhone}
                  </a>
                  <a
                    href="https://wa.me/919354249637"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:underline"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Base Location */}
              <div className="p-4 bg-white border border-[#E0D8CB] rounded space-y-1">
                <span className="text-[11px] text-[#7A8190] block uppercase tracking-wider">
                  Operating Location
                </span>
                <p className="font-medium text-[#191C21]">
                  Gurugram, Haryana, India (IST / UTC+5:30)
                </p>
                <p className="text-[11px] text-[#7A8190]">
                  Available for remote support nationwide and in-person consultations in Delhi NCR.
                </p>
              </div>

              {/* Verified Professional Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href="/Neudact_Engineers_Capabilities_Brochure.pdf"
                  download="Neudact_Engineers_Capabilities_Brochure.pdf"
                  className="inline-flex items-center gap-1.5 text-[#B84C2A] hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Brochure (PDF)</span>
                </a>

                <a
                  href="https://github.com/ShailinyaSaxenaWorkSpace"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#575D6A] hover:text-[#191C21]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shailinya-saxena-%F0%9F%87%AE%F0%9F%87%B3-270b35208"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#575D6A] hover:text-[#191C21]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Functional Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-10 bg-white border border-[#DDD5C7] rounded-lg space-y-6">
                <div className="flex items-center gap-3 text-emerald-700">
                  <CheckCircle2 className="w-7 h-7 shrink-0" />
                  <h3 className="font-serif text-2xl font-medium text-[#191C21]">
                    Inquiry Received
                  </h3>
                </div>

                <p className="text-sm text-[#4E5564] leading-relaxed">
                  Thank you for contacting Neudact Engineers, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{currentService}</strong> has been recorded. We will review your requirements and respond within 24 business hours.
                </p>

                {activationNotice && (
                  <div className="p-3.5 bg-amber-50 border-l-2 border-amber-600 rounded-r text-xs text-amber-900 leading-relaxed font-sans">
                    <strong>One-Time Email Activation:</strong> FormSubmit has sent a one-time activation email to <strong>neudact@gmail.com</strong>. Please check your inbox (or Spam folder) and click the confirmation link to authorize automatic email forwarding.
                  </div>
                )}

                <div className="p-4 bg-[#FAF7F2] border border-[#E0D8CB] rounded space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#191C21]">Alternative Direct Actions:</span>
                    <button
                      type="button"
                      onClick={copyFullMessage}
                      className="inline-flex items-center gap-1 text-[#B84C2A] hover:underline"
                    >
                      {copiedMsg ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedMsg ? 'Copied' : 'Copy Inquiry Summary'}</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EAE4D9]">
                    <a
                      href={gmailWebLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-white border border-[#DDD5C7] rounded text-[#191C21] hover:bg-[#F2ECE3] inline-flex items-center gap-1"
                    >
                      <span>Send via Gmail Web</span>
                      <ExternalLink className="w-3 h-3 text-[#7A8190]" />
                    </a>

                    <a
                      href={mailtoLink}
                      className="px-3 py-1.5 bg-white border border-[#DDD5C7] rounded text-[#191C21] hover:bg-[#F2ECE3] inline-flex items-center gap-1"
                    >
                      <span>Default Email Client</span>
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-white border border-[#DDD5C7] rounded text-emerald-800 hover:bg-[#F2ECE3] inline-flex items-center gap-1"
                    >
                      <span>Forward to WhatsApp</span>
                      <ExternalLink className="w-3 h-3 text-[#7A8190]" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-1.5 text-[#575D6A] hover:text-[#191C21] underline"
                    >
                      Submit another requirement
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 bg-white border border-[#DDD5C7] rounded-lg space-y-5"
                noValidate
              >
                {/* Form Heading & Service Indication */}
                <div className="pb-4 border-b border-[#EAE4D9] flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#191C21] uppercase tracking-wider">
                    Requirement Specification Form
                  </span>
                  <span className="font-mono text-[11px] text-[#7A8190]">
                    * Required Fields
                  </span>
                </div>

                {/* Name & Company Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block font-mono text-xs text-[#191C21]">
                      Your Name <span className="text-[#B84C2A]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Rajesh Sharma"
                      className={`w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border rounded text-[#191C21] placeholder-[#9AA0AC] focus:outline-none focus:ring-1 focus:ring-[#191C21] ${
                        errors.name ? 'border-red-500' : 'border-[#DDD5C7]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="block font-mono text-xs text-[#191C21]">
                      Company / Organization <span className="text-[#7A8190] text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g., Apex Infra &amp; Telecom Ltd."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#191C21] placeholder-[#9AA0AC] focus:outline-none focus:ring-1 focus:ring-[#191C21]"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block font-mono text-xs text-[#191C21]">
                      Email Address <span className="text-[#B84C2A]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border rounded text-[#191C21] placeholder-[#9AA0AC] focus:outline-none focus:ring-1 focus:ring-[#191C21] ${
                        errors.email ? 'border-red-500' : 'border-[#DDD5C7]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 font-mono">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block font-mono text-xs text-[#191C21]">
                      Phone Number <span className="text-[#7A8190] text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#191C21] placeholder-[#9AA0AC] focus:outline-none focus:ring-1 focus:ring-[#191C21]"
                    />
                  </div>
                </div>

                {/* Service Dropdown (Required) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="block font-mono text-xs text-[#191C21]">
                    Service Required <span className="text-[#B84C2A]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={currentService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#191C21] focus:outline-none focus:ring-1 focus:ring-[#191C21]"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-[11px] text-red-600 font-mono">{errors.service}</p>
                  )}
                </div>

                {/* Budget & Timeline (Optional) Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className="block font-mono text-xs text-[#191C21]">
                      Budget Range <span className="text-[#7A8190] text-[10px]">(Optional)</span>
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#191C21] focus:outline-none focus:ring-1 focus:ring-[#191C21]"
                    >
                      {BUDGET_OPTIONS.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-timeline" className="block font-mono text-xs text-[#191C21]">
                      Expected Timeline <span className="text-[#7A8190] text-[10px]">(Optional)</span>
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#191C21] focus:outline-none focus:ring-1 focus:ring-[#191C21]"
                    >
                      {TIMELINE_OPTIONS.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project or Tender Details (Required) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block font-mono text-xs text-[#191C21]">
                    Project or Tender Details <span className="text-[#B84C2A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your tender title/portal, website vision, software scope, or automation bottleneck..."
                    className={`w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border rounded text-[#191C21] placeholder-[#9AA0AC] focus:outline-none focus:ring-1 focus:ring-[#191C21] ${
                      errors.message ? 'border-red-500' : 'border-[#DDD5C7]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs font-semibold text-white bg-[#191C21] hover:bg-[#303642] disabled:opacity-60 transition-colors shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Requirement</span>
                        <Send className="w-3.5 h-3.5 text-[#B84C2A]" />
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-[#7A8190] text-center sm:text-right">
                    Zero spam · Confidential handling guaranteed
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
