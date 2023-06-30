import type { AppRouter } from '@acme/api'
import { sendToBackground } from "@plasmohq/messaging"
import {
  createTRPCProxyClient,
  httpBatchLink,
  loggerLink
} from '@trpc/client'
import superjson from 'superjson'

function getBaseUrl() {
  return `https://monorepo-next-nu.vercel.app` // dev SSR should use localhost
}

const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      async headers() {

        const token = await sendToBackground({
          name: "getToken",
        })

        return {
          authorization: token
        }
      }
    }),
  ],
})

export default trpc
