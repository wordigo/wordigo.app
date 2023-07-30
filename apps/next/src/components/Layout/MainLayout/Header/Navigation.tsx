import Link from "next/link";
import { useTranslation } from "next-i18next";

import { cn } from "@wordigo/ui/lib/utils";

const Navigation = ({ variant }: { variant?: "Sidebar" }) => {
  const { t } = useTranslation();
  const classes = cn(
    "flex items-center",
    variant === "Sidebar" ? "text-[5px] text-blue-800" : "text-[#4A5562] justify-between text-[13px] dark:text-white dark:opacity-80",
  );

  return (
    <ul className={classes}>
      <li className={cn("flex items-center font-bold", variant === "Sidebar" ? "gap-5" : "gap-6")}>
        <Link href="/#features" passHref className="transition-colors hover:text-foreground text-muted-foreground text-sm font-medium">
          {t("navbar.features")}
        </Link>
        <Link href="/library" passHref className="transition-colors hover:text-foreground text-muted-foreground text-sm font-medium">
          {t("navbar.library")}
        </Link>
        <Link href="/#pricing" passHref className="transition-colors hover:text-foreground text-muted-foreground text-sm font-medium">
          {t("navbar.pricing")}
        </Link>
        <Link href="/about" passHref className="transition-colors hover:text-foreground text-muted-foreground text-sm font-medium">
          {t("navbar.about")}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
