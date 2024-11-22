/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/abdurrahmangazi-web" : "",
};

export default nextConfig;
