import Link from "next/link";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

const Navigation = ({ variant }: { variant?: "Sidebar" }) => {
  const { t } = useTranslation();
  return (
    <ul
      className={cn(
        "flex items-center",
        variant === "Sidebar" && "text-[12px] text-blue-800",
        variant !== "Sidebar" && "text-[#4A5562] justify-between text-[13px] dark:text-white dark:opacity-80",
      )}
    >
      <li className={cn("flex items-center font-bold", variant === "Sidebar" && "gap-5", variant !== "Sidebar" && "gap-3")}>
        <Link href={"/"} passHref className={buttonVariants({ variant: "ghost" })}>
          {t("nav_home")}
        </Link>
        <Link href={"/about"} passHref className={buttonVariants({ variant: "ghost" })}>
          {t("nav_about")}
        </Link>
        <Link href={"/dictionaries"} passHref className={buttonVariants({ variant: "ghost" })}>
          {t("nav_dictionaries")}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
