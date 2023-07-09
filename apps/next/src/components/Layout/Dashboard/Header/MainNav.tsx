import Link from "next/link";
import NavProfile from "@/components/Layout/NavProfile";
import useCommonStore from "@/stores/Common";
import { GitlabIcon, MenuIcon } from "lucide-react";

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

export function MainNav({ heading }: IMainNav) {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <div className="flex items-center w-full relative justify-between">
      <span className="flex items-center gap-4">
        <Button className="h-8 w-8" variant="outline" size="icon" onClick={handleSidebar}>
          <MenuIcon size={18} />
        </Button>
        <div className="flex items-center gap-3">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <GitlabIcon />
            <div className="inline-flex font-bold gap-x-1">
              <span>Wordigo</span>
              <span className="text-sm opacity-50 font-bold tracking-tight self-end">/{heading}</span>
            </div>
          </Link>
        </div>
      </span>
      <div className="flex gap-4">
        <ThemeMode />
        <NavProfile />
      </div>
    </div>
  );
}
