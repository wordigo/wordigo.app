import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicIconLogo from "@/components/Logo/DynamicIconLogo";
// Import useState
import DynamicLogo from "@/components/Logo/DynamicLogo";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

import { Button, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import NavProfile from "../../NavProfile";
import Navigation from "./Navigation";

export default function HomeHeader() {
  const { t } = useTranslation();
  const { status } = useSession();

  const [isMenuOpen, setMenuOpen] = useState(false); // State for burger menu

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="flex max-lg:px-3 items-center justify-between w-full m-auto py-[1.125rem] px-20">
        <div className="flex items-center">
          <Link href="/" className={cn("flex items-center mr-6", !toggleMenu && "hidden")}>
            <DynamicLogo />
            <div className="font-semibold ml-[10px]">Wordigo</div>
          </Link>
          <span className="max-lg:hidden">
            <Navigation />
          </span>
        </div>
        <div className="flex gap-x-4 items-center max-lg:hidden">
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
        <Button onClick={toggleMenu} className={cn("lg:hidden text-black bg-transparent bg-white", isMenuOpen === true && "hidden")} variant="outline">
          Menu
        </Button>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full text-black bg-LightBackground dark:bg-DarkBackground max-w-fit min-w-fit h-screen px-6 py-6 border border-r justify-between flex flex-col">
          <span className="flex items-center flex-col w-full border-b border-gray-300 dark:border-gray-800 mb-8">
            <div className="w-full flex items-center justify-between pb-3">
              <DynamicIconLogo />
              <X className="p-1 dark:text-white" onClick={toggleMenu} />
            </div>

            <div className="w-full">
              <Navigation variant="borgerMenu" />
            </div>
          </span>

          <div className="flex gap-x-4 items-center lg:hidden">
            {status === "loading" ? (
              <NavProfile.Loader />
            ) : status === "authenticated" ? (
              <NavProfile />
            ) : (
              <span>
                <Link href="/auth/signin" className={cn("bg-transparent mr-4 text-white", buttonVariants({ variant: "outline" }))}>
                  {t("navbar.signin")}
                </Link>
                <Link href="/auth/signup" className={cn(buttonVariants({ variant: "default" }))}>
                  {t("navbar.signup")}
                </Link>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
