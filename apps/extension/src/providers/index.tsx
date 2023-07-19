import { Portal } from "@radix-ui/react-portal"
import { ThemeProvider } from "next-themes"
import type { PropsWithChildren } from "react"

import { Toaster } from "~../../packages/ui"
import { TRPCProvider } from "~options/providers/trpc-provider"

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <Portal>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TRPCProvider>{children}</TRPCProvider>
        <Toaster />
      </ThemeProvider>
    </Portal>
  )
}

export default Provider
