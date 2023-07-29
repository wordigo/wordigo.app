import FloatingButton from "~features/translate/components/FlaotingButton"
import { PopoverContext, useContextPopover, usePopover } from "~features/translate/context/popover"

import "~/styles/globals.css"

import styleText from "data-text:~/styles/globals.css"
import type { PlasmoCSConfig } from "plasmo"
import { Fragment } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import TranslatePopup from "~features/translate/components/TranslatePopup"
import Provider from "~providers"

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
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Provider>
        <PopoverContext.Provider value={popover}>
          <Translate />
        </PopoverContext.Provider>
      </Provider>
    </QueryClientProvider>
  )
}

export default Translate.Layout
