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
  async rewrites() {
    return [
      {
        source: "/wp-admin/:path*",
        destination: "/wp-admin/:path*",
      },
      {
        source: "/wp-admin",
        destination: "/wp-admin",
      },
      {
        source: "/wp-login.php",
        destination: "/wp-login.php",
      },
    ];
  },
};

module.exports = nextConfig;
