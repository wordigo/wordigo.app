import Link from "next/link";
import { useTranslation } from "next-i18next";

import { cn } from "@wordigo/ui/lib/utils";

const Navigation = ({ variant }: { variant?: "borgerMenu" }) => {
  const { t } = useTranslation();

  const classes = cn(variant === "borgerMenu" ? "flex-col flex" : "flex items-center gap-6 mb-[2px]");
  const classes_hover = cn(variant === "borgerMenu" ? "py-4 hover:text-foreground text-muted-foreground" : "");

  return (
    <ul className="flex items-center font-sm mt-1">
      <li className={cn(classes)}>
        <Link
          href="/#features"
          passHref
          className={cn("transition-colors hover:text-foreground text-muted-foreground text-sm font-medium", classes_hover)}
        >
          {t("navbar.features")}
        </Link>
        <Link
          href="/library"
          passHref
          className={cn("transition-colors hover:text-foreground text-muted-foreground text-sm font-medium", classes_hover)}
        >
          {t("navbar.library")}
        </Link>
        <Link href="/#pricing" className={cn("transition-colors hover:text-foreground text-muted-foreground text-sm font-medium", classes_hover)}>
          {t("navbar.pricing")}
        </Link>
        <Link href="/about" className={cn("transition-colors hover:text-foreground text-muted-foreground text-sm font-medium", classes_hover)}>
          {t("navbar.about")}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
