/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ use output: 'export' instead of next export
  output: 'export',

  // ✅ make sure Next.js image optimization is disabled for static export
  images: {
    unoptimized: true,
  },

  // ✅ removed deprecated appDir flag (no longer needed in Next 14)
};

export default nextConfig;
