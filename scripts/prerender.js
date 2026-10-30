import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { pathToFileURL } from 'node:url';

// Paths
const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const ssrBundlePath = path.resolve('dist-ssr/App.js');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

if (!fs.existsSync(ssrBundlePath)) {
  console.error('dist-ssr/App.js not found. Run vite build --ssr first.');
  process.exit(1);
}

// Configurable Site URL for seamless domain migration
const SITE_URL = (process.env.VITE_SITE_URL || 'https://neudact-engineers.vercel.app').replace(/\/+$/, '');
const DEFAULT_URL = 'https://neudact-engineers.vercel.app';

let templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// If custom domain is specified via VITE_SITE_URL, update all occurrences in template
if (SITE_URL !== DEFAULT_URL) {
  templateHtml = templateHtml.replaceAll(DEFAULT_URL, SITE_URL);
}

// Global mock for SSR rendering environment
global.window = {
  location: { pathname: '/' },
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {}
};
global.document = {
  title: '',
  getElementById: () => null,
  querySelector: () => null
};

// Import compiled SSR App
const ssrModule = await import(pathToFileURL(ssrBundlePath).href);
const App = ssrModule.default;

// Import Service Data
const serviceDataPath = path.resolve('src/data/servicePagesData.js');
const { SERVICE_PAGES } = await import(pathToFileURL(serviceDataPath).href);

console.log(`--- Starting Static Pre-Rendering (SSG) [Site URL: ${SITE_URL}] ---`);

// 1. Render Homepage into dist/index.html
global.window.location.pathname = '/';
const homeHtmlContent = renderToString(React.createElement(App));
const homePrerendered = templateHtml.replace(
  '<div id="root"></div>',
  `<div id="root">${homeHtmlContent}</div>`
);
fs.writeFileSync(indexHtmlPath, homePrerendered, 'utf-8');
console.log(`✓ Pre-rendered dist/index.html (Homepage) -> Size: ${(fs.statSync(indexHtmlPath).size / 1024).toFixed(1)} KB`);

// 2. Render each Dedicated Service Page into dist/services/<slug>/index.html
const servicesDir = path.join(distDir, 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

let count = 0;
const todayIso = new Date().toISOString().split('T')[0];
const sitemapUrls = [
  `  <!-- Primary Landing Page -->\n  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`
];

for (const [slug, service] of Object.entries(SERVICE_PAGES)) {
  global.window.location.pathname = `/services/${slug}`;

  const serviceAppString = renderToString(React.createElement(App));

  const pageTitle = service.metaTitle || service.title;
  const pageDesc = service.metaDescription;
  const pageUrl = `${SITE_URL}${service.path}`;

  let pageHtml = templateHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${pageTitle}</title>`
    )
    .replace(
      /<meta name="title" content=".*?" \/>/,
      `<meta name="title" content="${pageTitle}" />`
    )
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${pageDesc}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${pageUrl}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${pageTitle}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${pageDesc}" />`
    )
    .replace(
      /<meta name="twitter:url" content=".*?" \/>/,
      `<meta name="twitter:url" content="${pageUrl}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${pageTitle}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${pageDesc}" />`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${serviceAppString}</div>`
    );

  const pageDir = path.join(servicesDir, slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const outFilePath = path.join(pageDir, 'index.html');
  fs.writeFileSync(outFilePath, pageHtml, 'utf-8');
  console.log(`✓ Pre-rendered /services/${slug}/index.html -> ${(fs.statSync(outFilePath).size / 1024).toFixed(1)} KB`);
  count++;

  sitemapUrls.push(
    `  <url>\n    <loc>${pageUrl}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );
}

// 3. Generate dynamic sitemap.xml in dist
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.join('\n\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`✓ Synchronized dist/sitemap.xml with ${sitemapUrls.length} verified URLs`);

// 4. Synchronize dist/robots.txt sitemap reference
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  let robotsTxt = fs.readFileSync(robotsPath, 'utf-8');
  robotsTxt = robotsTxt.replace(/Sitemap: .*/, `Sitemap: ${SITE_URL}/sitemap.xml`);
  fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
  console.log(`✓ Synchronized dist/robots.txt sitemap URL to ${SITE_URL}/sitemap.xml`);
}

// Clean up dist-ssr temporary folder
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });

console.log(`--- Finished! Successfully pre-rendered Homepage + ${count} dedicated service pages ---`);
