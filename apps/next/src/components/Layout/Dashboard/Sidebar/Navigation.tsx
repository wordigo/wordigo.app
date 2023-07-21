import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCommonStore from "@/stores/Common";
import { AnimatePresence } from "framer-motion";

import { Skeleton } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import useSidebarNavigations, { type SidebarChildNav, type SidebarNavItem } from "./navigations.constants";

const DashboardNav = () => {
  const navigations = useSidebarNavigations();

  return (
    <AnimatePresence>
      <nav className="grid items-start gap-2">
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
    "flex flex-col hover:bg-accent hover:text-accent-foreground rounded-md font-medium group relative",
    path === item.href ? "bg-accent" : "transparent",
    item.disabled && "cursor-not-allowed opacity-80",
  );

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <div className={classes}>
      <Link key={index} href={item.disabled ? "/" : item.href} className="flex items-center w-full" onClick={handleSidebar}>
        <span className="flex items-center px-3 py-2 text-sm w-full">
          {item.icon}
          <span className="flex justify-between w-full items-center">{item.title}</span>
        </span>
      </Link>
      {item.child && <DashboardNav.ChildItem {...item.child} key={item.href} />}
    </div>
  );
};

DashboardNav.ChildItem = ({ navs, trigger, loading }: SidebarChildNav) => {
  return (
    <Fragment>
      <div tabIndex={50} className="text-sm z-50 font-medium absolute right-0 top-2 mr-2 flex items-center justify-center">
        {trigger}
      </div>
      {!loading && (
        <div className="flex flex-col">
          {navs?.map((item, index) => (
            <Link href={"/dashboard/dictionaries/" + item.link} key={index} className="w-full">
              <span className={cn("flex items-center px-3 py-2 text-sm w-full")}>
                <span className="flex justify-between w-full items-center">{item.name}</span>
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
