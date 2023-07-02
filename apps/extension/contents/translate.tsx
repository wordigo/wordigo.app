import { TRPCProvider } from "~options/providers/trpc-provider"

import FloatingButton from "~features/translate/components/floatingButton"
import { PopoverContext, useContextPopover, usePopover } from "~features/translate/context/popover"

import "@acme/ui/styles/globals.css"

import styleText from "data-text:@acme/ui/styles/globals.css"

import { Portal } from "@radix-ui/react-portal"
import type { PlasmoCSConfig } from "plasmo"
import { Fragment } from "react"
import TranslatePopup from "~features/translate/components/traslatePopup"

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

  console.log("test")

  return (
    <Fragment>
      {
        isFloating && <FloatingButton />
      }
      {
        isPopup && <TranslatePopup />
      }
    </Fragment>
  )
}

Translate.Layout = () => {
  const popover = usePopover({})

  return (
    <Portal>
      <PopoverContext.Provider value={popover}>
        <TRPCProvider>
          <Translate />
        </TRPCProvider>
      </PopoverContext.Provider>
    </Portal>
  )
}

export default Translate.Layout
