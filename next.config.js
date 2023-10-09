/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.it",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
