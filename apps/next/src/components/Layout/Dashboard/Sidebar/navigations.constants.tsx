import { useGetDictionariesMutation } from "@/store/dictionaries/api";
import { computedDictionaries } from "@/utils/computedDictionaries";
import { Button } from "@wordigo/ui";
import {
  BookMarked,
  ChevronDown,
  ChevronUp,
  Home,
  LayoutDashboard,
  LibraryIcon,
  RotateCw,
  Settings,
} from "lucide-react";
import { useTranslation } from "next-i18next";
import { type ReactElement, useState } from "react";

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
  const [handleGetDictionaries, { data, isLoading, reset }] =
    useGetDictionariesMutation();
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

  const computedDictionariesNavs = computedDictionaries(data?.data)
    ?.slice(0, 5)
    ?.map((item) => ({
      name: item.title,
      value: item.slug,
    })) as SidebarChildNavOption[];

  return [
    {
      title: t("navbar.dashboard"),
      href: "/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: t("navbar.dictionaries"),
      href: "/dashboard/dictionaries",
      icon: <BookMarked size={16} />,
      child: {
        trigger: (
          <Button
            onClick={handleDictionary}
            variant="outline"
            size="icon"
            className="w-fit h-fit p-1"
          >
            {isLoading ? (
              <RotateCw className="h-3 w-3 animate-spin" />
            ) : showDictionary ? (
              <ChevronDown size={9} />
            ) : (
              <ChevronUp size={"9"} />
            )}
          </Button>
        ),
        loading: isLoading,
        navs: computedDictionariesNavs,
      },
    },
    {
      title: t("navbar.settings"),
      href: "/dashboard/settings",
      icon: <Settings size={16} />,
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
