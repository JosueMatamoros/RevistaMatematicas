const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: basePath ? basePath + '/' : undefined,

  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
