/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
