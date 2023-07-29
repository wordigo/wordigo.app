import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import NavProfile from "../../NavProfile";
import ThemeMode from "../../ThemeMode";
import ChangeLanguage from "../ChangeLanguage";
import Navigation from "./Navigation";

export default function HomeHeader() {
  const { t } = useTranslation();
  const { isLoggedIn, userLoading } = useAuthStore();
  const { data, status } = useSession();

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between w-full m-auto py-[1.125rem] px-20">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image src="/images/logo.png" width={104} height={40} priority alt="" />
          </Link>
          <Navigation />
        </div>
        <div className="flex gap-x-4 items-center">
          <ThemeMode />
          <ChangeLanguage />
          <div className="w-[1px] !h-10 bg-border"></div>
          {status === "loading" ? (
            <NavProfile.Loader />
          ) : status === "authenticated" ? (
            <NavProfile />
          ) : (
            <span>
              <Link href="/auth/signin" className={cn("bg-transparent mr-4", buttonVariants({ variant: "outline" }))}>
                {t("nav_login")}
              </Link>
              <Link href="/auth/signup" className={cn(buttonVariants({ variant: "default" }))}>
                {t("nav_register")}
              </Link>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
