import { type FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import NavProfile from "@/components/Layout/NavProfile";
import useCommonStore from "@/stores/Common";
import { MenuIcon } from "lucide-react";

import { Button } from "@wordigo/ui";

import ChangeLanguage from "../../MainLayout/ChangeLanguage";
import ThemeMode from "../../ThemeMode";

interface IMainNav {
  heading: string | undefined;
  query: string | undefined;
}

const DynamicIconLogo = dynamic(() => import("@/components/Logo/DynamicIconLogo"), {
  ssr: false,
}) as FunctionComponent;

export function MainNav({ heading, query }: IMainNav) {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);
  const router = useRouter();
  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  const handleRouter = () => {
    if (heading === "Dictionary") {
      void router.replace("/dashboard/dictionaries");
    } else if (heading === "Dashboard") {
      void router.replace("/dashboard");
    }
  };

  return (
    <div className="flex items-center w-full relative justify-between">
      <div className="flex items-center gap-4">
        <Button className="h-8 w-8" variant="outline" size="icon" onClick={handleSidebar}>
          <MenuIcon size={18} />
        </Button>
        <div className="flex items-center gap-3">
          <div onClick={handleRouter} className="hidden items-center justify-center space-x-1 md:flex cursor-pointer HOVER_NAV">
            <div className="LOGO">
              <DynamicIconLogo />
            </div>
            <div className="inline-flex font-bold gap-x-1">
              <span className="LOGO">Wordigo</span>
              <span className="text-sm opacity-50 font-bold tracking-tight self-end hover:opacity-100 LIGHT">/{heading}</span>
              {query && <span className="text-sm opacity-50 font-bold tracking-tight self-end">/{query}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <ThemeMode />
        <ChangeLanguage />
        <NavProfile />
      </div>
    </div>
  );
}
