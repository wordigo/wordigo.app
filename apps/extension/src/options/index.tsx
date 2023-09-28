import { Separator } from "@wordigo/ui"
import { Button } from "baseui/button"
import { Tab, Tabs } from "baseui/tabs-motion"
import * as React from "react"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import Provider from "~providers"
import ThemeProvider from "~providers/theme"
import { Tabs, Tab } from "baseui/tabs-motion";

import { getLocalMessage } from "../utils/locale"
import Apparance from "./apparence/layout"
import { SidebarNav } from "./components/sidebar-nav"
import { OptionsContext, useOptions, useOptionsContext } from "./context/options"
import Settings from "./settings/layout"

export const sidebarNavItems = [
  {
    title: getLocalMessage("general"),
    tab: "general"
  },
  {
    title: getLocalMessage("appearance"),
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


const styleElement = document.createElement("style")

const engine = new Styletron({
  prefix: "wordigo-",
  container: styleElement
})

document.body.appendChild(styleElement)

Dashboard.Layout = () => {
  const options = useOptions({})
  const [activeKey, setActiveKey] = React.useState("0")

  return (
    <Provider engine={engine}>
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey)
      }}
      activateOnFocus>
      <Tab title="First">Content 1</Tab>
      <Tab title="Second">Content 2</Tab>
      <Tab title="Third">Content 3</Tab>
    </Tabs>    </Provider>
  )
}

export default Dashboard.Layout