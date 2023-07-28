import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCommonStore from "@/stores/Common";
import { AnimatePresence } from "framer-motion";
import { CircleDot } from "lucide-react";

import { Skeleton } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import useSidebarNavigations, { type SidebarChildNav, type SidebarNavItem } from "./navigations.constants";

const DashboardNav = () => {
  const navigations = useSidebarNavigations();

  return (
    <AnimatePresence>
      <nav className="grid items-start">
        {navigations.map((item, index) => (
          <DashboardNav.Item {...item} key={index} />
        ))}
      </nav>
    </AnimatePresence>
  );
};

DashboardNav.Item = (item: SidebarNavItem, index: number) => {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);
  const path = usePathname();

  const classes = cn(
    "flex flex-col hover:text-accent-foreground rounded-[6px] font-medium group relative mb-1 hover:bg-[#F8FAFC] dark:hover:bg-[#101929]",
    path === item.href ? "" : "transparent",
    item.disabled && "cursor-not-allowed opacity-80",
  );

  return (
    <div className={classes}>
      <Link
        key={index}
        href={item.disabled ? "/" : item.href}
        className="flex items-center w-full m-3"
        onClick={() => setSidebarPanel(!showSidebarPanel)}
      >
        <span className="flex items-center w-full">
          <div className="flex items-center">
            {item.icon}
            <span className="ml-3">{item.title}</span>
          </div>
        </span>
      </Link>
      {item.child && <DashboardNav.ChildItem {...item.child} key={item.href} />}
    </div>
  );
};

DashboardNav.ChildItem = ({ navs, trigger, loading }: SidebarChildNav) => {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);
  return (
    <Fragment>
      <div tabIndex={50} className="text-sm z-50 absolute font-medium right-3 top-3 flex items-center justify-center">
        {trigger}
      </div>
      {!loading && (
        <div className="flex flex-col">
          {navs?.map((item, index) => (
            <Link
              href={"/dashboard/dictionaries/" + item.link}
              key={index}
              className="flex items-center hover:bg-accent px-3 mx-3 rounded-md mb-2"
              onClick={() => setSidebarPanel(!showSidebarPanel)}
            >
              <CircleDot size={"12"}></CircleDot>
              <span className={cn("flex items-center px-3 text-sm w-full")}>
                <span className="flex justify-between w-full items-center px-1 py-1 rounded-sm">{item.name}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </Fragment>
  );
};

DashboardNav.ChildItemLoading = () => (
  <div className="flex flex-col gap-y-2">
    <Skeleton className="w-full h-4 rounded" />
    <Skeleton className="w-full h-4 rounded" />
    <Skeleton className="w-full h-4 rounded" />
  </div>
);

export default DashboardNav;
