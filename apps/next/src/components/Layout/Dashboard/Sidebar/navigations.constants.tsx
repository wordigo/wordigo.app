import { type ReactElement, useState } from "react";
import { useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { computedDictionaries } from "@/utils/computedDictionaries";
import { BookMarked, ChevronDown, ChevronUp, Home, LayoutDashboard, LibraryIcon, RotateCw, Settings } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Button } from "@wordigo/ui";

export interface SidebarChildNavOption {
  name: string;
  value?: string;
  href?: string;
}

export interface SidebarChildNav {
  trigger: ReactElement;
  loading?: boolean;
  navs: SidebarChildNavOption[] | null;
}

export interface SidebarNavItem {
  title: string;
  href?: string;
  icon: ReactElement;
  disabled?: string;
  child?: SidebarChildNav;
}

const useSidebarNavigations = (): SidebarNavItem[] => {
  const { t } = useTranslation();
  const [handleGetDictionaries, { data, isLoading, reset }] = useGetUserDictionariesMutation();
  const [showDictionary, setShowDictionary] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const handleDictionary = () => {
    if (!showDictionary) {
      void handleGetDictionaries("");
    } else reset();
    setShowDictionary(!showDictionary);
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  const computedDictionariesNavs = computedDictionaries(data?.data)?
    .slice(0, 5)
    ?.map((item) => ({ name: item.title, value: item.slug })) as SidebarChildNavOption[];

  return [
    {
      title: t("navbar.dashboard"),
      href: "/dashboard",
      icon: <LayoutDashboard className="text-2xl" />,
    },
    {
      title: t("navbar.dictionaries"),
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
      title: t("navbar.settings"),
      href: "/dashboard/settings",
      icon: <Settings className="text-2xl" />,
      child: {
        trigger: (
          <Button onClick={handleSettings} variant="outline" size="icon" className="w-fit h-fit p-1">
            {showSettings ? <ChevronDown size={12} /> : <ChevronUp size={"12"} />}
          </Button>
        ),
        loading: false,
        navs: showSettings
          ? [
              {
                href: "/dashboard/settings/profile",
                name: t("breadcrumbs.profile"),
              },
              {
                href: "/dashboard/settings/account",
                name: t("breadcrumbs.account"),
              },
              {
                href: "/dashboard/settings/apparance",
                name: t("breadcrumbs.apparance"),
              },
            ]
          : [],
      },
    },
  ];
};

export const useSidebarUnderNavigations = (): SidebarNavItem[] => {
  const { t } = useTranslation();
  return [
    {
      title: t("navbar.home"),
      href: "/",
      icon: <Home className="text-2xl" />,
    },
    {
      title: t("navbar.library"),
      href: "/library",
      icon: <LibraryIcon className="text-2xl" />,
    },
  ];
};
export default useSidebarNavigations;
