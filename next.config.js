/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      largePageDataBytes:2000 * 2000,
    },
    images: {
    
      domains: ['grand11.in' ,"www.g11fantasy.com"]
   },
  };
  
  module.exports = nextConfig;