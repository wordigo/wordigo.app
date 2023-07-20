import * as Portal from "@radix-ui/react-portal"
import { Toaster } from "@wordigo/ui"
import type { PropsWithChildren } from "react"

import { TRPCProvider } from "./trpc-provider"

const Provider = ({ children }: PropsWithChildren) => {
  const portalContainer = document.getElementById("el-translate-container") || document.body

  return (
    <Portal.Root data-theme="dark" container={portalContainer}>
      <TRPCProvider>{children}</TRPCProvider>
      <Toaster />
    </Portal.Root>
  )
}

export default Provider
