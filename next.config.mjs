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
        source: '/solutions/:path*',
        destination: 'https://solutions.marroc.xyz/:path*',
        permanent: true,
      },
      {
        source: '/marrocsolutions/:path*',
        destination: 'https://solutions.marroc.xyz/:path*',
        permanent: true,
      },
    ]
  }
}
export default nextConfig;
