import "~/styles/globals.css"

import { Separator } from "@wordigo/ui"

import Provider from "~providers"
import ThemeProvider from "~providers/theme"

import Apparance from "./apparence/layout"
import { SidebarNav } from "./components/sidebar-nav"
import { OptionsContext, useOptions, useOptionsContext } from "./context/options"
import Settings from "./settings/layout"

export const sidebarNavItems = [
  {
    title: "General",
    tab: "general"
  },
  {
    title: "Appearance",
    tab: "appearance"
  }
]

const Dashboard = () => {
  const options = useOptionsContext()

  return (
    <div className="flex-1 lg:max-w-2xl">
      {options.activeTab === "general" && <Settings />}
      {options.activeTab === "appearance" && <Apparance />}
    </div>
  )
}

Dashboard.Layout = () => {
  const options = useOptions({})

  return (
    <Provider>
      <ThemeProvider>
        <OptionsContext.Provider value={options}>
          <div className="space-y-6 p-10 pb-16 bg-background text-primary h-screen">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">Manage your plugin settings and you can change your translation preference.</p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <Dashboard />
            </div>
          </div>
        </OptionsContext.Provider>
      </ThemeProvider>
    </Provider>
  )
}

export default Dashboard.Layout
