import './src/env'; // importing this here so we know at runtime if there are any env errors
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
