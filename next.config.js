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
        source: "/wp-admin/:path*", // Wszystkie ścieżki zaczynające się od /wp-admin/
        destination: "http://www.martibikini.com/wp-admin/:path*", // Przekierowanie do WordPressa
        has: [{ type: "host", value: "www.martibikini.com" }],
      },
    ];
  },
};

module.exports = nextConfig;
