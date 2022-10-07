/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://anotheritdude.github.io/'],
    unoptimized: true
  },
}

module.exports = nextConfig
