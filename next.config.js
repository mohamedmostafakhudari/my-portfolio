/** @type {import('next').NextConfig} */
const nextConfig = {
  //This line is for temporary situation and would be removed later
  output: "export",
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
