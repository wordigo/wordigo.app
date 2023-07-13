import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo/DynamicLogo";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import NavProfile from "../../NavProfile";
import ThemeMode from "../../ThemeMode";
import Banner from "../Banner";
import ChangeLanguage from "../ChangeLanguage";
import Navigation from "./Navigation";

export default function HomeHeader() {
  const { t } = useTranslation();
  const { isLoggedIn, userLoading } = useAuthStore();

  return (
    <Fragment>
      <Banner />
      <div className="flex items-center justify-between max-w-[1380px] m-auto pt-2">
        <nav className="flex items-center justify-between gap-16">
          <span>
            <Image src="/images/logo.png" width={250} height={250} priority alt="" className="rounded-md" />
          </span>
          <Navigation />
        </nav>
        <div className="flex gap-y-6 gap-x-3 mt-[20px] items-center">
          <ThemeMode />
          <ChangeLanguage />
          <div className="w-[1px] !h-9 bg-gray-200 dark:bg-gray-800"></div>
          {userLoading ? (
            <NavProfile.Loader />
          ) : isLoggedIn ? (
            <NavProfile />
          ) : (
            <span>
              <Link href="/auth/signin" className={cn("bg-transparent mr-3", buttonVariants({ size: "sm", variant: "outline" }))}>
                {t("nav_login")}
              </Link>
              <Link href="/auth/signup" className={cn(buttonVariants({ size: "sm", variant: "default" }))}>
                {t("nav_register")}
              </Link>
            </span>
          )}
        </div>
      </div>
    </Fragment>
  );
}
