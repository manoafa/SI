/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for development testing
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig