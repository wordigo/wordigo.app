import type { Dispatch, SetStateAction } from "react"
import { createContext, useContext, useMemo, useState } from "react"

export interface IOptions {
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

export const useOptions = ({}) => {
  const [activeTab, setActiveTab] = useState("general")

  return useMemo(() => ({ activeTab, setActiveTab }), [activeTab, setActiveTab])
}

export const OptionsContext = createContext({} as IOptions)

export const useOptionsContext = () => {
  return useContext(OptionsContext)
}
