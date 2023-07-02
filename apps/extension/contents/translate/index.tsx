import { TRPCProvider } from "~options/providers/trpc-provider"

import FloatingButton from "./components/floatingButton"
import { PopoverContext, usePopover } from "./context/popover"

import "@acme/ui/styles/globals.css"

import styleText from "data-text:@acme/ui/styles/globals.css"

import TranslatePopup from "./components/traslatePopup"

export const getShadowHostId = () => "wordigo-translate-content"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const Translate = () => {
  const popover = usePopover({})

  return (
    <div>
      <FloatingButton />
      <TranslatePopup />
    </div>
  )
}

Translate.Layout = () => {
  const popover = usePopover({})

  return (
    <PopoverContext.Provider value={popover}>
      <TRPCProvider>
        <Translate />
        <div className="bg-blue-500 h-10 w-10"></div>
      </TRPCProvider>
    </PopoverContext.Provider>
  )
}

export default Translate.Layout
