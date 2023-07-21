import Image from "next/image";
import Link from "next/link";
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
    <div>
      <Banner />
      <nav className="flex items-center justify-between max-w-[1380px] m-auto py-6">
        <Link href="/" className="h-10 relative w-[6.5rem]">
          <Image src="/images/logo.png" fill priority alt="" />
        </Link>
        <Navigation />
        <div className="flex gap-x-4 items-center">
          <ThemeMode />
          <ChangeLanguage />
          <div className="w-[1px] !h-10 bg-border"></div>
          {userLoading ? (
            <NavProfile.Loader />
          ) : isLoggedIn ? (
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
