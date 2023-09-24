import "@wordigo/ui/styles/globals.css"

import styleText from "data-text:@wordigo/ui/styles/globals.css"

import TranslatePopup from "~features/popup/components/Popup"
import { PopupContext, usePopup } from "~features/popup/context/popup"
import Provider from "~providers"

export const getShadowHostId = () => "wordigo-translate-content"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const Popup = () => {
  const popup = usePopup({})

  return (
    <Provider>
      <PopupContext.Provider value={popup}>
        <TranslatePopup />
      </PopupContext.Provider>
    </Provider>
  )
}

export default Popup
