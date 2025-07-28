import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
    ],
  },
};

export default nextConfig;
