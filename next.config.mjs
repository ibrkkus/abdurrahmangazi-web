/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: "/abdurrahmangazi-web",
  basePath: "/abdurrahmangazi-web",
  output: "export",
};

export default nextConfig;
