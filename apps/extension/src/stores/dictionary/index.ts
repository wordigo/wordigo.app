import type { Dictionary } from "./types";
import { create } from "zustand";
import { getUserDictionaries } from "~api/dictionary";

interface IDictionaryStore {
  dictionaries: Dictionary[] | undefined;
  setDictionaries: (dictionaries: Dictionary[]) => void;
  getDictionaries: () => Promise<void>;
}

export const useDictionaryStore = create<IDictionaryStore>((set) => ({
  dictionaries: undefined,
  setDictionaries: (dictionaries) => set({ dictionaries }),
  getDictionaries: async () => {
    const response = await getUserDictionaries();
    set({ dictionaries: response.data });
  },
}));
