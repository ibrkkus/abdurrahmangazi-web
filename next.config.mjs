/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProd ? "/abdurrahmangazi-web" : "",
  basePath: isProd ? "/abdurrahmangazi-web" : "",
  output: "export",
};

export default nextConfig;
