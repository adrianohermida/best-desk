/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features para melhor performance
  experimental: {
    // Otimizações CSS
    optimizeCss: true
  },

  // Configuração de build otimizada
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Configuração Turbopack
  turbo: {
    rules: {
      // Tree shaking para Tabler Icons
      '*.{js,jsx,ts,tsx}': {
        loaders: ['next-swc-loader']
      }
    }
  },

  // Headers para performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Redirects para SEO
  async redirects() {
    return [
      // Adicionar redirects necessários aqui
    ];
  },

  // Configuração de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // Compressão
  compress: true,

  // PoweredBy header removal
  poweredByHeader: false,

  // Strict mode
  reactStrictMode: true,

  // SWC minification é padrão no Next.js 15

  // Trailing slash
  trailingSlash: false,

  // Output
  output: 'standalone'
};

module.exports = nextConfig;
