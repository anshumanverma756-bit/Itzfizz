/** @type {import('next').NextConfig} */
// Static export so the site can be hosted on GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set by the deploy workflow (e.g. "/itzfizz-hero").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

module.exports = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};
