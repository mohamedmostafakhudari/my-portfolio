/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.it",
        port: "",
      },
    ],
  },
   webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
