import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.upliftdesk.com',
      },
      {
        protocol: 'https',
        hostname: 'store.hermanmiller.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sony.com',
      },
      {
        protocol: 'https',
        hostname: 'www.keychron.com',
      },
      {
        protocol: 'https',
        hostname: 'i.dell.com',
      },
       {
        protocol: 'https',
        hostname: 'www.nngroup.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;
