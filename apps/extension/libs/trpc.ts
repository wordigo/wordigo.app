import type { AppRouter } from '@acme/api'
import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client'
import superjson from "superjson"
function getBaseUrl() {
  return `http://localhost:3000` // dev SSR should use localhost
}


export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
// => { useQuery: ..., useMutation: ...}