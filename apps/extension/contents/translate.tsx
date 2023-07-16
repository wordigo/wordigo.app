import FloatingButton from "~features/translate/components/FlaotingButton"
import { PopoverContext, useContextPopover, usePopover } from "~features/translate/context/popover"
import { TRPCProvider } from "~options/providers/trpc-provider"

import "@wordigo/ui/styles/globals.css"

import { Portal } from "@radix-ui/react-portal"
import styleText from "data-text:@wordigo/ui/styles/globals.css"
import type { PlasmoCSConfig } from "plasmo"
import { Fragment } from "react"

import { Toaster } from "~../../packages/ui"
import TranslatePopup from "~features/translate/components/TranslatePopup"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getShadowHostId = () => "wordigo-translate-content"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const Translate = () => {
  const { isFloating, isPopup } = useContextPopover()

  return (
    <Fragment>
      {isFloating && <FloatingButton />}
      {isPopup && <TranslatePopup />}
    </Fragment>
  )
}

Translate.Layout = () => {
  const popover = usePopover({})

  return (
    <Portal>
      <Toaster />
      <PopoverContext.Provider value={popover}>
        <TRPCProvider>
          <Translate />
        </TRPCProvider>
      </PopoverContext.Provider>
    </Portal>
  )
}

export default Translate.Layout
