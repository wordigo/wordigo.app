import { create } from "zustand"
import { type IDictionaryStore } from "./interfaces"

const useDictionaryStore = create<IDictionaryStore>((set) => ({
    dictionaryList: [],
    setDictionaryList: (value) => set({ dictionaryList: value })
}))

export default useDictionaryStore