export const TRANSLATE_CARD_WIDTH = 450
export const TRANSLATE_CARD_HEIGHT = 200

export const TRANSLATE_POPUP_TOP = 14
export const TRANSLATE_POPUP_LEFT = 0

export const TRANSLATE_OPTION_STORAGE = "translate_option"
export const TARGET_LANGUAGE_STORAGE = "target_language"

export enum translateOptionEnums {
  translate_button = "translate_button",
  select_and_translate = "select_and_translate"
}

export const framerStepAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
