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

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

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

console.log('--- Starting Static Pre-Rendering (SSG) for SEO & AI Crawlers ---');

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
for (const [slug, service] of Object.entries(SERVICE_PAGES)) {
  global.window.location.pathname = `/services/${slug}`;

  const serviceAppString = renderToString(React.createElement(App));

  let pageHtml = templateHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${service.metaTitle || service.title}</title>`
    )
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${service.metaDescription}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="https://neudact-engineers.vercel.app${service.path}" />`
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
}

// Clean up dist-ssr temporary folder
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });

console.log(`--- Finished! Successfully pre-rendered Homepage + ${count} dedicated service pages ---`);
