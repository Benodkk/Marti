/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    output: "standalone",
  },
};

module.exports = nextConfig;
