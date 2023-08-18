import { Storage } from "@plasmohq/storage";
import { useStorage } from "@plasmohq/storage/hook";
import type { Dispatch, SetStateAction } from "react";
import { useRef } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface IPopoverOptions {
  isFloating: boolean;
  isPopup: boolean;
  sourceLanguage: string;
  setFloating: Dispatch<SetStateAction<boolean>>;
  setPopup: Dispatch<SetStateAction<boolean>>;
  setSourceLanguage: Dispatch<SetStateAction<string>>;
  selectedText?: string;
  playerRef?: React.MutableRefObject<HTMLAudioElement>;
  targetLanguage: string;
  cordinate: {
    x: number;
    y: number;
  };
}

export const usePopover = ({}) => {
  const translatorShadowContent = document.querySelector(
    "#wordigo-translate-content"
  );
  const [isFloating, setFloating] = useState<boolean>(false);
  const [isPopup, setPopup] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>();
  const [sourceLanguage, setSourceLanguage] = useState<string>();
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const playerRef = useRef<HTMLAudioElement>();

  const [targetLanguage] = useStorage({
    key: "targetLanguage",
    instance: new Storage({
      area: "local",
    }),
  });

  const handleMouseUp = (event) => {
    const tag = event?.target?.tagName;

    const targetElement = event.target as HTMLElement;
    const popupContainer = document.querySelector("#el-popup-container");
    const rootTranslatorContainer = document.querySelector<HTMLElement>(
      "#el-translate-container"
    );

    if (
      popupContainer?.contains(targetElement) ||
      translatorShadowContent?.contains(targetElement) ||
      rootTranslatorContainer?.contains(targetElement) ||
      tag === "INPUT" ||
      tag === "VIDEO" ||
      tag === "TEXTAREA"
    )
      return;

    const selectedText = window.getSelection().toString()?.trim();

    if (selectedText !== "") {
      setSelectedText(selectedText);

      const { pageX: x, pageY: y } = event;
      console.log(isPopup);

      if (isPopup) setPopup(false);
      setCordinate({ x, y });
      setFloating(true);
    } else {
      setFloating(false);
      setPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return useMemo(
    () => ({
      selectedText,
      setSelectedText,
      isFloating,
      setFloating,
      isPopup,
      targetLanguage,
      setPopup,
      cordinate,
      setCordinate,
      sourceLanguage,
      setSourceLanguage,
      playerRef,
    }),
    [
      selectedText,
      setSelectedText,
      isFloating,
      setFloating,
      isPopup,
      setPopup,
      targetLanguage,
      sourceLanguage,
      cordinate,
      setCordinate,
      setSourceLanguage,
      playerRef,
    ]
  );
};

export const PopoverContext = createContext({} as IPopoverOptions);

export const useContextPopover = () => {
  return useContext(PopoverContext);
};
