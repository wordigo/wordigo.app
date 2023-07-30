import * as Portal from "@radix-ui/react-portal"
import type { PropsWithChildren } from "react"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { useStorage } from "@plasmohq/storage/hook"

import { CToaster } from "./toaster"

const Provider = ({ children }: PropsWithChildren) => {
  const [theme] = useStorage("theme")
  const portalContainer = document.getElementById("el-translate-container") || document.body
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Portal.Root data-theme={theme || "light"} container={portalContainer}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <CToaster />
    </Portal.Root>
  )
}

export default Provider
