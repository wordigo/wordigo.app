import NavProfile from "../../NavProfile";
import ThemeMode from "../../ThemeMode";
import Feedback from "./Feedback";
import Navigation from "./Navigation";
import DashboardHeader from "@/components/Layout/Dashboard/DashboardHeader";
import DashboardNavigation from "@/components/Layout/Dashboard/Sidebar/Navigation";
import ChangeLanguage from "@/components/Layout/MainLayout/ChangeLanguage";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import StaticLogo from "@/components/Logo/StaticLogo";
import { Button, Separator, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function HomeHeader({ className }: { className?: string }) {
  const { t } = useTranslation();
  const { status } = useSession();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-[#E2E8F0] fixed w-full z-50">
      <div
        className={cn(
          "w-full max-w-[90rem] bg-LightBackground dark:bg-DarkBackground m-auto",
          className
        )}
      >
        <nav className="flex items-center justify-between w-full m-auto py-[1.125rem] max-md:px-4 max-8xl:px-5">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "flex items-center mr-6 justify-center",
                !toggleMenu && "hidden"
              )}
            >
              <StaticLogo />
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
              <Fragment>
                <Feedback />
                <div className="hidden md:block w-[0.5px] h-7 bg-gray-300 dark:bg-gray-700"></div>
                <NavProfile />
              </Fragment>
            ) : (
              <div className="flex gap-y-6 gap-x-3 items-center">
                <ThemeMode showLabel={false} className="!h-9 !px-3 !py-2" />
                <ChangeLanguage className="!h-9 !px-3 !py-2" />
                <div className="w-[1px] !h-9 bg-gray-200 dark:bg-gray-800"></div>
                <Link
                  href="/auth/signup"
                  className={cn(
                    buttonVariants({ variant: "default", className: "!h-9" })
                  )}
                >
                  {t("navbar.get_started")}
                </Link>
              </div>
            )}
          </div>
          <Button
            onClick={toggleMenu}
            className="lg:hidden text-black bg-transparent bg-white"
            variant="outline"
            size="icon"
          >
            <Menu size={17} />
          </Button>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="col-span-1 flex flex-col fixed justify-between top-0 right-0 z-50 py-4 text-light_text dark:text-white bg-LightBackground dark:bg-DarkBackground g-red-500 px-5 min-w-[280px] max-w-[280px] border-l shadow-md shadow-[rgba(16, 24, 40, 1)] h-screen lg:hidden z-50"
          >
            <span className="flex items-center flex-col w-full mb-8">
              <div className="font-bold text-[18px] flex items-center select-none pt-3 justify-between w-full">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center mr-6 max-w-[128px]  min-w-[128px]",
                    !toggleMenu && "hidden"
                  )}
                >
                  <DynamicLogo size={128} />
                </Link>
                <Button
                  onClick={toggleMenu}
                  className="text-black dark:text-white !h-9 !w-9"
                  variant="outline"
                  size="icon"
                >
                  <X size={19} />
                </Button>
              </div>

              <div className="flex w-full md:flex-col py-4">
                <DashboardNavigation />
              </div>
            </span>

            <div className="lg:hidden">
              <Separator className="mb-2" />
              <div className="flex gap-x-4 items-center">
                {status === "loading" ? (
                  <NavProfile.Loader />
                ) : status === "authenticated" ? (
                  <NavProfile variant="borgerMenu" />
                ) : (
                  <span className="w-full flex flex-col gap-y-3">
                    <div className="flex gap-x-2 items-center justify-between">
                      <ThemeMode className="!h-8 !px-2 w-full" />
                      <ChangeLanguage className="!h-8 !px-2 w-full" />
                    </div>
                    <Link
                      href="/auth/signup"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          className: "w-full",
                        })
                      )}
                    >
                      {t("navbar.get_started")}
                    </Link>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
