import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCommonStore from "@/stores/Common";
import { AnimatePresence } from "framer-motion";

import { Skeleton } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import useSidebarNavigations, { type SidebarChildNav, type SidebarNavItem, useSidebarUnderNavigations } from "./navigations.constants";

const DashboardNav = () => {
  const navigations = useSidebarNavigations();
  const underNavigations = useSidebarUnderNavigations();

  return (
    <AnimatePresence>
      <nav className="grid items-start">
        {underNavigations.map((item, index) => (
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
    </div>
  );
};

DashboardNav.ChildItem = ({ trigger }: SidebarChildNav) => {
  return (
    <Fragment>
      <div tabIndex={50} className="text-sm z-50 absolute font-medium right-3 top-3 flex items-center justify-center">
        {trigger}
      </div>
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
