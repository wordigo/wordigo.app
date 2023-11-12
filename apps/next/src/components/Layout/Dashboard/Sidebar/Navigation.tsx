import NavProfile from "../../NavProfile";
import useSidebarNavigations, {
  type SidebarChildNav,
  type SidebarNavItem,
} from "./navigations.constants";
import { Skeleton } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { AnimatePresence } from "framer-motion";
import { CircleDot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const DashboardNav = () => {
  const navigations = useSidebarNavigations();

  return (
    <AnimatePresence>
      <nav className="flex md:flex-col w-full justify-between">
        {navigations.map((item, index) => (
          <DashboardNav.Item {...item} key={index} />
        ))}
        <div className="block md:hidden">
          <NavProfile />
        </div>
      </nav>
    </AnimatePresence>
  );
};

DashboardNav.Item = (item: SidebarNavItem, index: number) => {
  const path = usePathname();

  const classes = cn(
    "flex flex-col hover:text-accent-foreground rounded-[6px] font-medium  group relative mb-1 hover:bg-[#F8FAFC] dark:hover:bg-[#101929]",
    path === item.href || item.href.includes(path.split("/")[2])
      ? "text-accent-foreground bg-[#F1F5F9] dark:bg-[#101929]"
      : "transparent",
    item.disabled && "cursor-not-allowed opacity-80"
  );

  return (
    <div className={classes} key={index}>
      <Link href={item.href} className="flex items-center px-3 py-2">
        <span className="flex items-center w-full">
          <div className="flex items-center">
            <div>{item.icon}</div>
            <p className="ml-2 hidden md:block text-[14px]">{item.title}</p>
          </div>
        </span>
      </Link>
      {item.child && <DashboardNav.ChildItem {...item.child} key={item.href} />}
    </div>
  );
};

DashboardNav.ChildItem = ({ navs, trigger, loading }: SidebarChildNav) => {
  return (
    <Fragment>
      <div
        tabIndex={50}
        className="z-40 hidden md:flex absolute right-3 top-2 items-center justify-center"
      >
        {trigger}
      </div>
      {!loading && (
        <div className="flex md:flex-col">
          {navs?.map((item, index) => (
            <Link
              href={
                item.value ? "/dashboard/dictionaries/" + item.value : item.href
              }
              key={index}
              className="flex items-center hover:bg-accent px-3 mx-3 rounded-md mb-2"
            >
              <CircleDot size="12" />
              <span
                className={cn(
                  "px-3 text-sm w-full line-clamp-1 py-1 rounded-sm"
                )}
              >
                {item.name}
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
