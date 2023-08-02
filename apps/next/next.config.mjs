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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },

  ...i18n
}

export default config
