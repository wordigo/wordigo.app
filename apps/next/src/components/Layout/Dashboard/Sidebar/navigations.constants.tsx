import { type ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { BookMarked, ChevronDown, ChevronUp, Home, LayoutDashboard, LibraryIcon, RotateCw, Settings } from "lucide-react";

import { Button } from "@wordigo/ui";

export interface SidebarChildNavOption {
  name: string;
  link: string;
}

export interface SidebarChildNav {
  trigger: ReactElement;
  loading?: boolean;
  navs: SidebarChildNavOption[] | null;
}

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: ReactElement;
  disabled?: string;
  child?: SidebarChildNav;
}

const useSidebarNavigations = (): SidebarNavItem[] => {
  const [handleGetDictionaries, { data, isLoading, reset }] = useGetUserDictionariesMutation();
  const [showDictionary, setShowDictionary] = useState<boolean>(false);

  const handleDictionary = () => {
    if (!showDictionary) {
      void handleGetDictionaries("");
    } else reset();
    setShowDictionary(!showDictionary);
  };

  const computedDictionariesNavs = data?.data?.slice(0, 5)?.map((item) => ({ name: item.title, link: item.id })) as SidebarChildNavOption[];

  return [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="text-2xl" />,
    },
    {
      title: "Dictionaries",
      href: "/dashboard/dictionaries",
      icon: <BookMarked className="text-2xl flex" />,
      child: {
        trigger: (
          <Button onClick={handleDictionary} variant="outline" size="icon" className="w-fit h-fit p-1">
            {isLoading ? <RotateCw className="h-3 w-3 animate-spin" /> : showDictionary ? <ChevronDown size={12} /> : <ChevronUp size={"12"} />}
          </Button>
        ),
        loading: isLoading,
        navs: computedDictionariesNavs,
      },
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="text-2xl" />,
    },
  ];
};

export const useSidebarUnderNavigations = (): SidebarNavItem[] => {
  return [
    {
      title: "Home",
      href: "/",
      icon: <Home className="text-2xl" />,
    },
    {
      title: "Library",
      href: "/library",
      icon: <LibraryIcon className="text-2xl" />,
    },
  ];
};
export default useSidebarNavigations;
