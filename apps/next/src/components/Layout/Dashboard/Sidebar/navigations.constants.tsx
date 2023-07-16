import { type ReactElement, useState } from "react";
import { api } from "@/libs/trpc";
import { BookMarked, ChevronDown, ChevronUp, LayoutDashboard, RotateCw } from "lucide-react";

import { Button } from "@wordigo/ui";

export interface SidebarChildNavOption {
  name: string;
  link: string;
}

export interface SidebarChildNav {
  trigger: ReactElement;
  loading?: boolean;
  navs: SidebarChildNavOption[];
}

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: ReactElement;
  disabled?: string;
  child?: SidebarChildNav;
}

const useSidebarNavigations = (): SidebarNavItem[] => {
  const { mutate, data, isLoading, reset } = api.dictionary.getUserDictionariesMutation.useMutation();
  const [showDictionary, setShowDictionary] = useState<boolean>(false);

  const handleDictionary = () => {
    if (!showDictionary) {
      mutate();
    } else reset();
    setShowDictionary(!showDictionary);
  };

  const computedDictionariesNavs = data?.dictionaries.map((item) => ({ name: item.title, link: item.id })) as SidebarChildNavOption[];

  return [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Dictionaries",
      href: "/dashboard/dictionaries",
      icon: <BookMarked className="mr-2 h-4 w-4" />,
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
  ];
};

export default useSidebarNavigations;
