import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

import trpc, { trpcClient } from "~libs/trpc"

export const TRPCProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
