import { Label, Switch } from "@acme/ui"

import "@acme/ui/styles/globals.css"

import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})

export const Options = () => {
  const [status, setStatus] = useState<boolean>()
  const updateStorage = async () => {
    setStatus(!status)
    await storage.set("translateStatus", !status)
  }

  const getStatus = async () => {
    const translateStatus = await storage.get("translateStatus")
    setStatus(translateStatus as never)
  }

  useEffect(() => {
    getStatus()
  }, [])

  return (
    <div className="p-4 flex flex-col">
      <Label>Translate Status:</Label>
      <Switch checked={status} onCheckedChange={updateStorage} />
    </div>
  )
}

export default Options
