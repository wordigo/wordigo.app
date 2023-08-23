import { create } from "zustand";

export interface IPopoverStore {
  isFloating: boolean;
  isPopup: boolean;
  selectedText: string;
  sourceLanguage: string;
  translateOption: string;
  targetLanguage: string;
  cordinate: { x: number; y: number };
  setFloating: (floating: boolean) => void;
  setPopup: (popup: boolean) => void;
  setSelectedText: (text: string) => void;
  setSourceLanguage: (language: string) => void;
  setTargetLanguage: (language: string) => void;
  setTranslateOption: (option: string) => void;
  setCordinate: (coord: { x: number; y: number }) => void;
}

export const usePopoverStore = create<IPopoverStore>((set) => ({
  isFloating: false,
  isPopup: false,
  selectedText: "",
  sourceLanguage: "",
  translateOption: "",
  targetLanguage: "",
  cordinate: { x: 0, y: 0 },

  setFloating: (floating) => set({ isFloating: floating }),
  setPopup: (popup) => set({ isPopup: popup }),
  setSelectedText: (text) => set({ selectedText: text }),
  setSourceLanguage: (language) => set({ sourceLanguage: language }),
  setTargetLanguage: (language) => set({ targetLanguage: language }),
  setTranslateOption: (option) => set({ translateOption: option }),
  setCordinate: (coord) => set({ cordinate: coord }),
}));
