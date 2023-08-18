import styleText from "data-text:~/styles/globals.css";
import type { PlasmoCSConfig } from "plasmo";
import { Fragment } from "react";
import "~/styles/globals.css";
import FloatingButton from "~features/translate/components/FlaotingButton";
import TranslatePopup from "~features/translate/components/TranslatePopup";
import {
  PopoverContext,
  useContextPopover,
  usePopover,
} from "~features/translate/context/popover";
import Provider from "~providers";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
};

export const getShadowHostId = () => "wordigo-translate-content";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = styleText;
  return style;
};

const Translate = () => {
  const { isFloating, isPopup, playerRef, selectedText, targetLanguage } =
    useContextPopover();

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(
    selectedText
  )}`;

  return (
    <Fragment>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      {selectedText && <audio src={computedUrl} ref={playerRef} />}
      {isFloating && <FloatingButton />}
      {isPopup && <TranslatePopup />}
    </Fragment>
  );
};

Translate.Layout = () => {
  const popover = usePopover({});

  return (
    <Provider>
      <PopoverContext.Provider value={popover}>
        <Translate />
      </PopoverContext.Provider>
    </Provider>
  );
};

export default Translate.Layout;
