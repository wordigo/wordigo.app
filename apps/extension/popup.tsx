import { Portal } from "@radix-ui/react-portal"

import "@wordigo/ui/styles/globals.css"

import styleText from "data-text:@wordigo/ui/styles/globals.css"

import { Toaster } from "~../../packages/ui"
import TranslatePopup from "~features/popup/components/Popup"
import { PopupContext, usePopup } from "~features/popup/context/popup"
import { TRPCProvider } from "~options/providers/trpc-provider"

export const getShadowHostId = () => "wordigo-translate-content"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const Popup = () => {
  const popup = usePopup({})

  return (
    <Portal>
      <Toaster />
      <PopupContext.Provider value={popup}>
        <TRPCProvider>
          <TranslatePopup />
        </TRPCProvider>
      </PopupContext.Provider>
    </Portal>
  )
}

export default Popup
