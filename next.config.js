/** @type {import('next').NextConfig} */
//! Remember to remove assetPrefix when deploying to vercel  !//
const nextConfig = {
  output: "export",
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
