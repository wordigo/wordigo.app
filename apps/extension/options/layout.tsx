import { Separator, Toaster } from "@wordigo/ui"
import type { PropsWithChildren } from "react"

import { SidebarNav } from "./components/sidebar-nav"
import { TRPCProvider } from "./providers/trpc-provider"

const sidebarNavItems = [
  {
    title: "General",
    tab: "general"
  }
]

const SettingsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TRPCProvider>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your plugin settings and you can change your translation preference.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
      <Toaster />
    </TRPCProvider>
  )
}

export default SettingsLayout
