import Link from "next/link";
import NavProfile from "@/components/Layout/NavProfile";
import { siteConfig } from "@/constants/site";
import useCommonStore from "@/stores/Common";
import { GitlabIcon } from "lucide-react";
import { TbMenu2 } from "react-icons/tb";

import ThemeMode from "../../ThemeMode";

interface IMainNav {
  user: {
    name: string;
    image: string;
    email: string;
  };
  heading: string;
}

export function MainNav({ user, heading }: IMainNav) {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <div className="flex items-center w-full relative justify-between">
      <span className="flex items-center gap-4">
        <div onClick={handleSidebar} className="text-[20px] p-1 border rounded-md">
          <TbMenu2 />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <GitlabIcon />
            <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>
          <h2 className="text-xl font-bold tracking-tight">{heading}</h2>
        </div>
      </span>
      <div className=" flex gap-4">
        <ThemeMode />
        <NavProfile user={user} />
      </div>
    </div>
  );
}
