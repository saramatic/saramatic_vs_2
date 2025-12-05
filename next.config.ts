// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn-hostname.com', // <-- REPLACE THIS with your actual image domain (e.g., s3.amazon.com)
        port: '',
        pathname: '/**',
      },
      // Optionally, if you need to access images from localhost during development:
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      // },
    ],
  },
};

module.exports = nextConfig;