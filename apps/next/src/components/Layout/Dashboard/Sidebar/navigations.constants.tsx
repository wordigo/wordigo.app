import { type ReactElement } from "react";
import { BookMarked, LayoutDashboard } from "lucide-react";

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: ReactElement;
  disabled?: string;
}

export interface SidebarConfig {
  sidebarNav: SidebarNavItem[];
}

export const SidebarConfig: SidebarConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Dictionary",
      href: "/dashboard/dictionary",
      icon: <BookMarked className="mr-2 h-4 w-4" />,
    },
  ],
};
