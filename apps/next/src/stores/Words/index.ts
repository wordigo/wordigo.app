import { create } from "zustand"
import { type IWordStore } from "./interfaces"

const useWordStore = create<IWordStore>((set) => ({
    wordList: [],
    setWordList: (value) => set({ wordList: value })
}))

export default useWordStore