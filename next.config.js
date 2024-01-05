/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // output: "export",
  distDir: "dist",
  // images: {
  //   unoptimized: true,
  // },
  async rewrites() {
    return [
      {
        source: "/wp-:path*",
        destination: "/wp-:path*",
        // permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
