import { type PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

const Navigation = ({ variant }: { variant?: "Sidebar" }) => {
  const { t } = useTranslation();

  const classes = cn(
    "flex items-center",
    variant === "Sidebar" && "text-[12px] text-blue-800",
    variant !== "Sidebar" && "text-[#4A5562] justify-between text-[13px] dark:text-white dark:opacity-80",
  );

  return (
    <ul className={classes}>
      <li className={cn("flex items-center font-bold", variant === "Sidebar" && "gap-5", variant !== "Sidebar" && "gap-3")}>
        <Navigation.Link href="/">{t("nav_home")}</Navigation.Link>
        <Navigation.Link href="/dictionaries">{t("nav_dictionaries")}</Navigation.Link>
        <Navigation.Link href="/about">{t("nav_about")}</Navigation.Link>
      </li>
    </ul>
  );
};

Navigation.Link = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const path = usePathname();
  const active = href === path;

  const activeClasses = active && "bg-accent text-accent-foreground";

  return (
    <Link href={href} passHref className={buttonVariants({ variant: "ghost", class: activeClasses })}>
      {children}
    </Link>
  );
};

export default Navigation;
