import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { cn } from "@wordigo/ui/lib/utils";

const Navigation = ({ variant }: { variant?: "Sidebar" }) => {
  const { t } = useTranslation();
  return (
    <ul
      className={cn(
        "flex items-center",
        variant === "Sidebar" && "text-[12px] text-blue-800",
        variant !== "Sidebar" && "text-[#4A5562] justify-between text-[13px] w-full dark:text-white dark:opacity-80",
      )}
    >
      <li className={cn("flex items-center font-bold", variant === "Sidebar" && "gap-5", variant !== "Sidebar" && "gap-9")}>
        <Link href={"/"} passHref>
          {t("nav_home")}
        </Link>
        <Link href={"/dashboard"} passHref>
          {t("nav_dashboard")}
        </Link>
        <Link href={"/about"} passHref>
          {t("nav_about")}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
