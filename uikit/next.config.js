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

  // Webpack customization para code splitting
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Configurar code splitting por vendor
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true
          },
          // MUI chunk separado
          mui: {
            test: /[\\/]node_modules[\\/]@mui[\\/]/,
            name: 'mui',
            priority: 15,
            reuseExistingChunk: true
          },
          // Framer Motion chunk separado
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            priority: 15,
            reuseExistingChunk: true
          },
          // React Slick chunk separado
          reactSlick: {
            test: /[\\/]node_modules[\\/]react-slick[\\/]/,
            name: 'react-slick',
            priority: 15,
            reuseExistingChunk: true
          },
          // Tabler Icons chunk separado
          tablerIcons: {
            test: /[\\/]node_modules[\\/]@tabler[\\/]icons-react[\\/]/,
            name: 'tabler-icons',
            priority: 15,
            reuseExistingChunk: true
          },
          // Common chunks para componentes compartilhados
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      };

      // Configurar module federation para chunks maiores
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Tree shaking para Tabler Icons
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs'
    };

    // Configurar webpack para melhor tree shaking
    config.module.rules.push({
      test: /\.jsx?$/,
      include: /node_modules\/@tabler\/icons-react/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [
              [
                'import',
                {
                  libraryName: '@tabler/icons-react',
                  libraryDirectory: '',
                  camel2DashComponentName: false
                },
                '@tabler/icons-react'
              ]
            ]
          }
        }
      ]
    });

    return config;
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
