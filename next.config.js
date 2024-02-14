/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_STRAPICODE,
  },
};

module.exports = nextConfig;
