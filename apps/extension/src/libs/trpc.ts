import { httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "@wordigo/api"
import superjson from "superjson"

import { sendToBackground } from "@plasmohq/messaging"

const getBaseUrl = () => (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://wordigo.app")

const trpc = createTRPCReact<AppRouter>()

export const trpcClient = trpc.createClient({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) => process.env.NODE_ENV === "development" || (opts.direction === "down" && opts.result instanceof Error)
    }),
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      async headers() {
        const token = await sendToBackground({
          name: "getToken"
        })

        return {
          authorization: token
        }
      }
    })
  ]
})

export default trpc