import * as Portal from "@radix-ui/react-portal"
import type { PropsWithChildren } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { CToaster } from "./toaster"
import { TRPCProvider } from "./trpc-provider"

const Provider = ({ children }: PropsWithChildren) => {
  const [theme] = useStorage("theme")
  const portalContainer = document.getElementById("el-translate-container") || document.body

  console.log("theme", theme)

  return (
    <Portal.Root data-theme={theme || "light"} container={portalContainer}>
      <TRPCProvider>{children}</TRPCProvider>
      <CToaster />
    </Portal.Root>
  )
}

export default Provider
