/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    output: "export",
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
