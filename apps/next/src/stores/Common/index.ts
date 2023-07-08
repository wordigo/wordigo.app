import { create } from "zustand"
import { type ICommonStore } from "./interfaces"

const useCommonStore = create<ICommonStore>((set) => ({
  showSidebarPanel: false,
  setSidebarPanel: (value) => set({ showSidebarPanel: value }),
}))

export default useCommonStore