import { create } from "zustand"
import { type ICommonStore } from "./interfaces"

const useCommonStore = create<ICommonStore>((set) => ({
  showSidebarPanel: false,
  setSidebarPanel: (value) => set({ showSidebarPanel: value }),

  showDetailDictionary: false,
  setDetailDictionary: (value) => set({ showDetailDictionary: value })
}))

export default useCommonStore