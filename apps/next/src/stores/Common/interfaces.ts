
export interface ICommonStore {
  showSidebarPanel: boolean
  setSidebarPanel: (session: boolean) => void

  showDetailDictionary: boolean,
  setDetailDictionary: (session: boolean) => void
}