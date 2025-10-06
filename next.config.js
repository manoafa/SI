/** @type {import('next').NextConfig} */
const nextConfig = {
  // For production deployment with API routes
  // output: 'export', // Commented out to enable API routes
  // trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig