/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
    turbopack: {
      root: __dirname
    }
  }
}
export default nextConfig;
