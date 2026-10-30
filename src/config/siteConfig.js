/**
 * Centralized Site Configuration for Neudact Engineers
 *
 * To migrate domain (e.g., to https://neudactengineers.com):
 * Set VITE_SITE_URL in environment or .env file.
 * All canonical tags, Open Graph meta, and Schema.org structures
 * will automatically adapt without code edits.
 */

export const SITE_URL = (
  (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://neudact-engineers.vercel.app'
).replace(/\/+$/, '');

export const SITE_CONFIG = {
  name: 'Neudact Engineers',
  legalName: 'Neudact Engineers',
  tagline: 'Where Intelligence Meets Execution.',
  url: SITE_URL,
  logo: `${SITE_URL}/neudact-logo.png`,
  email: 'neudact@gmail.com',
  phone: '+91 93542 49637',
  address: {
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    addressCountry: 'India'
  },
  social: {
    instagram: 'https://www.instagram.com/neudact_engineers/',
    linkedin: 'https://www.linkedin.com/in/shailinya-saxena-%F0%9F%87%AE%F0%9F%87%B3-270b35208',
    github: 'https://github.com/ShailinyaSaxenaWorkSpace'
  }
};
