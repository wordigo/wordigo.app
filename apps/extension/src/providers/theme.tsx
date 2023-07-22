import type { PropsWithChildren } from "react"
import { useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import type { AppearanceFormValues } from "~options/apparence/apparance-form"

const storage = new Storage({
  area: "local"
})

const ThemeProvider = ({ children }: PropsWithChildren): React.ReactElement => {
  useEffect(() => {
    void storage.get("theme").then((value: AppearanceFormValues["theme"]) => {
      document.body.setAttribute("data-theme", value || "light")
    })
  }, [])

  return <>{children}</>
}

export default ThemeProvider
