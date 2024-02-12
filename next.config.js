/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      largePageDataBytes:2000 * 2000,
    },
    images: {
    
      domains: ['https://grand11.in/g11/']
   },
  };
  
  module.exports = nextConfig;