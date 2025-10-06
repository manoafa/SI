/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export to generate out directory
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig