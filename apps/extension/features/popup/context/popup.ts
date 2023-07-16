import { createContext, useContext, useMemo } from "react"

export interface IPopupOptions {}

export const usePopup = ({}) => {
  return useMemo(() => ({}), [])
}

export const PopupContext = createContext({} as IPopupOptions)

export const useContextPopup = () => {
  return useContext(PopupContext)
}
