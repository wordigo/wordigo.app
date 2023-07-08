import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { cn } from "@wordigo/ui/lib/utils";

import ThemeMode from "../../ThemeMode";
import Banner from "../Banner";
import Navigation from "./Navigation";

export default function HomeHeader() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    router.replace(router.pathname, router.pathname, { locale });
  };

  return (
    <Fragment>
      <Banner />
      <div className="flex items-center justify-between max-w-[1380px] m-auto">
        <nav className="flex items-center justify-between gap-16">
          <span className="flex gap-3 items-center">
            <Image src="/images/Logo.png" width={26} height={26} alt="" className="rounded-md" />
            <Link href={"/"} className="font-bold text-[18px]">
              Wordigo
            </Link>
          </span>
          <Navigation />
        </nav>
        <div className="flex gap-y-6 gap-x-3 mt-[20px]">
          <ThemeMode />
          <LanguageSelector defaultValue={i18n.language} onSelect={handleChangeLocale} className="w-[150px] !h-9" />
          <div className="w-[1px] !h-9 bg-gray-200 dark:bg-gray-800"></div>
          <span>
            <Link href="/auth/login" className={cn("bg-transparent mr-3", buttonVariants({ size: "sm", variant: "outline" }))}>
              {t("nav_login")}
            </Link>
            <Link href="/auth/register" className={cn(buttonVariants({ size: "sm", variant: "default" }))}>
              {t("nav_register")}
            </Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
