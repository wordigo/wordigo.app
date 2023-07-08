import { create } from "zustand"
import { type ICommonStore } from "./interfaces"

const useCommonStore = create<ICommonStore>((set) => ({
  showSidebaPanel: false,
  setSidebarPanel: (value) => set({ showSidebaPanel: value }),
}))

export default useCommonStore