import { TRANSLATE_POPUP_LEFT, TRANSLATE_POPUP_TOP } from "./constants";
import type { IPopoverStore } from "~stores/popover";

export const getPopupCordinate = (cordinate: IPopoverStore["cordinate"]) => ({
  top: cordinate?.y ? cordinate.y + TRANSLATE_POPUP_TOP : 0,
  left: cordinate?.x ? cordinate.x + TRANSLATE_POPUP_LEFT : 0,
});
