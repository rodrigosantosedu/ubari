/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/equipe",
        destination: "/",
        permanent: true,
      },
      {
        source: "/equipe/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ubari220.com.br" }],
        destination: "https://ubari.com.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ubari220.com.br" }],
        destination: "https://ubari.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
