/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // GitHub Pages configuration
  output: 'export',
  basePath: isProd ? '/BBC_CLONE' : '',
  assetPrefix: isProd ? '/BBC_CLONE/' : '',
  
  // Image configuration
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ichef.bbci.co.uk'],
    unoptimized: true,
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable problematic features during build
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  
  // Allow Next.js to generate default build ID for proper manifest handling
  // generateBuildId: async () => {
  //   return `build-${Date.now()}`
  // },
  
  // Handle Windows filesystem issues
  experimental: {
    // Ensure proper file system handling on Windows
    esmExternals: true,
  },
  
  // Output configuration - standalone mode can interfere with prerender manifest
  // Disabling to ensure proper prerender-manifest.json generation
  // output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  
  // Webpack configuration for Windows compatibility
  webpack: (config, { dev, isServer }) => {
    // Handle potential Windows path issues
    if (process.platform === 'win32') {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next'],
      }
    }
    
    // Ensure proper module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    }
    
    return config
  },
  
  // Custom headers removed for static export compatibility
  // Note: Custom headers don't work with static export
}

module.exports = nextConfig