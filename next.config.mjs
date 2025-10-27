/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // 👇 Add this line to enable static export
  output: 'export'
};

export default nextConfig;
