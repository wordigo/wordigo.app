import i18n from "./next-i18next.config.js"

/** @type {import("next").NextConfig} */
// @ts-ignore
const config = {
  experimental: {
    appDir: false
  },
  reactStrictMode: false,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@wordigo/ui", "@wordigo/api", "@wordigo/db"],

  images: {
    domains: ["api.dicebear.com", "flowbite.s3.amazonaws.com", "avatars.githubusercontent.com", "media.licdn.com"],
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  ...i18n
}

export default config
