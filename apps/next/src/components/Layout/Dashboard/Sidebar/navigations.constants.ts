export interface SidebarNavItem {
  title: string
  href: string
  icon: string
  disabled?: string
}

export interface SidebarConfig {
  sidebarNav: SidebarNavItem[]
}

export const SidebarConfig: SidebarConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Dictionary",
      href: "/dashboard/dictionary",
      icon: "billing",
    }
  ],
}
