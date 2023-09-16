import i18n from "./next-i18next.config.js";

/** @type {import("next").NextConfig} */
// @ts-ignore
const config = {
  experimental: {
    appDir: false,
  },
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

  ...i18n,
};

export default config;
