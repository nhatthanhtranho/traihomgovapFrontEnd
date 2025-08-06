import CompressionPlugin from 'compression-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  assetPrefix:
    process.env.NEXT_PUBLIC_APP_ENV === 'DEV' ? undefined : process.env.NEXT_PUBLIC_CLOUDFRONT_URL,
  webpack: function (config) {
    config.plugins.push(new CompressionPlugin());

    return config;
  },
  images: {
    unoptimized: true, // Disable the built-in optimization for static export
  },
};

export default nextConfig;
