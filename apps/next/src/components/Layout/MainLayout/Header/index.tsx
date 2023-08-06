import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import NavProfile from "../../NavProfile";
import Navigation from "./Navigation";

export default function HomeHeader() {
  const { t } = useTranslation();
  const { status } = useSession();

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
          {status === "loading" ? (
            <NavProfile.Loader />
          ) : status === "authenticated" ? (
            <NavProfile />
          ) : (
            <span>
              <Link href="/auth/signin" className={cn("bg-transparent mr-4", buttonVariants({ variant: "outline" }))}>
                {t("navbar.signin")}
              </Link>
              <Link href="/auth/signup" className={cn(buttonVariants({ variant: "default" }))}>
                {t("navbar.signup")}
              </Link>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
