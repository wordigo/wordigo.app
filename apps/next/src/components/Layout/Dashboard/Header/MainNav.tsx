import { type FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import NavProfile from "@/components/Layout/NavProfile";
import useCommonStore from "@/stores/Common";
import { MenuIcon } from "lucide-react";

import { Button } from "@wordigo/ui";

import ThemeMode from "../../ThemeMode";

interface IMainNav {
  user: {
    name: string;
    image: string;
    email: string;
  };
  heading: string;
}

const DynamicIconLogo = dynamic(() => import("@/components/Logo/DynamicIconLogo"), {
  ssr: false,
}) as FunctionComponent;

export function MainNav({ heading }: IMainNav) {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <div className="flex items-center w-full relative justify-between">
      <div className="flex items-center gap-4">
        <Button className="h-8 w-8" variant="outline" size="icon" onClick={handleSidebar}>
          <MenuIcon size={18} />
        </Button>
        <div className="flex items-center gap-3">
          <Link href="/" className="hidden items-center justify-center space-x-1 md:flex">
            <DynamicIconLogo />
            <div className="inline-flex font-bold gap-x-1">
              <span>Wordigo</span>
              <span className="text-sm opacity-50 font-bold tracking-tight self-end">/{heading}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <ThemeMode />
        <NavProfile />
      </div>
    </div>
  );
}
