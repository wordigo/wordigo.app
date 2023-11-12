/* eslint-disable @typescript-eslint/require-await */
import i18n from "./next-i18next.config.js";

/** @type {import("next").NextConfig} */
// @ts-ignore
const config = {
  reactStrictMode: false,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@wordigo/ui", "@wordigo/api", "@wordigo/db"],

  images: {
    domains: [
      "api.dicebear.com",
      "flowbite.s3.amazonaws.com",
      "avatars.githubusercontent.com",
      "media.licdn.com",
      "wordigo.s3.eu-west-2.amazonaws.com",
      "storage.googleapis.com",
      "wordigo.app",
      "lh3.googleusercontent.com",
    ],
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  ...i18n,
};

export default config;
