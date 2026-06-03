/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Redirecionamentos legados foram removidos em 03/06/2026.
  // O antigo solutions.marroc.xyz (subdomínio) foi extinto e todo o
  // conteúdo migrou para rotas internas em /solutions dentro de marroc.xyz.
  // Caso seja necessário adicionar redirects no futuro, documente a origem.
  async redirects() {
    return []
  }
}
export default nextConfig;
