import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  async redirects() {
    return [
      {
        source: '/marrocsolutions/:path*',
        destination: 'https://solutions.marroc.xyz/:path*',
        permanent: true,
      },
      {
        source: '/:path*/marrocsolutions/:path2*',
        destination: 'https://solutions.marroc.xyz/:path2*',
        permanent: true,
      },
    ]
  }
}
export default nextConfig;
