import type { IPopoverOptions } from "~features/translate/context/popover"
import { TRANSLATE_POPUP_LEFT, TRANSLATE_POPUP_TOP } from "./constants"

export const getPopupCordinate = (cordinate: IPopoverOptions['cordinate']) => (
  {
    top: cordinate?.y ? cordinate.y + TRANSLATE_POPUP_TOP : 0,
    left: cordinate?.x ? cordinate.x + TRANSLATE_POPUP_LEFT : 0,
  }
)