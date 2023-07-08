"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useCommonStore from "@/stores/Common";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, ChevronUp } from "lucide-react";

import { Button } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <AnimatePresence>
      <nav className="grid items-start gap-2">
        {items.map((item, index) => {
          return (
            item.href && (
              <label
                className={cn(
                  "flex items-center hover:bg-accent hover:text-accent-foreground rounded-md font-medium group relative",
                  path === item.href ? "bg-accent" : "transparent",
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Link key={index} href={item.disabled ? "/" : item.href} className="w-full" onClick={handleSidebar}>
                  <span className={cn("flex items-center px-3 py-2 text-sm w-full", item.title !== "Dictionary" && "w-full")}>
                    <ArrowRightIcon className="mr-2 h-4 w-4" />
                    <span className="flex justify-between w-full items-center">{item.title}</span>
                  </span>
                </Link>
                {item.title === "Dictionary" && (
                  <p className="text-sm font-medium absolute right-0 mr-2">
                    <Button variant="outline" size="icon" className="w-fit h-fit p-1">
                      <ChevronUp size={"12"} />
                    </Button>
                  </p>
                )}
              </label>
            )
          );
        })}
      </nav>
    </AnimatePresence>
  );
}
