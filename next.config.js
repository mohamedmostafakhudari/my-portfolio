/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio/",
  assetPrefix: "/my-portfolio/",
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
