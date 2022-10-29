/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //domains: ['https://anotheritdude.github.io/'],
    unoptimized: true
  },
}

console.log("nextjs")

module.exports = nextConfig
