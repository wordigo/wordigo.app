import NavProfile from "../../NavProfile";
import ThemeMode from "../../ThemeMode";
import ChangeLanguage from "../ChangeLanguage";
import Feedback from "./Feedback";
import Navigation from "./Navigation";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import StaticLogo from "@/components/Logo/StaticLogo";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import { Badge, Button, Separator, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

export default function HomeHeader() {
  const { t } = useTranslation();
  const { status } = useSession();
  const [{ y }] = useWindowScroll();
  const { width } = useWindowSize();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isScrolled = useMemo(() => (width <= 642 ? y > 80 : y > 150), [y]);

  const classes = useMemo(
    () => ({
      container: cn(
        "sticky top-0 z-50",
        isScrolled &&
          "bg-LightBackground/40 backdrop-blur dark:bg-DarkBackground border-b"
      ),
      nav: cn("py-[1.125rem] flex items-center justify-between container"),
    }),
    [isScrolled]
  );

  return (
    <>
      <nav className={classes.container}>
        <div className={classes.nav}>
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-1 justify-center mr-6",
                !toggleMenu && "hidden"
              )}
            >
              <StaticLogo />
              <div className="font-semibold">Wordigo</div>
              <Badge className="rounded-sm shadow-sm opacity-70 px-1 text-[10px]">
                Beta
              </Badge>
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
                <ChangeLanguage className="!h-9 !px-3 !py-2 !bg-transparent" />
                <Separator className="h-9" orientation="vertical" />
                <Link
                  href="/auth/signup"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      className:
                        "!h-9 relative hover:bg-primary transition-colors overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-1/2 before:bg-gray-50/30 before:blur before:select-none before:translate-x-[-170%] before:skew-x-[-20deg] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-[220%] hover:before:skew-x-[-20deg]",
                    })
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
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 p-5 w-[280px] h-screen flex flex-col text-light_text dark:text-white bg-LightBackground dark:bg-DarkBackground border-l shadow-md shadow-[rgba(16, 24, 40, 1)] lg:hidden"
          >
            <div className="flex items-center justify-between select-none">
              <Link href="/" className={cn("", !toggleMenu && "hidden")}>
                <DynamicLogo />
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
              <Navigation variant="borgerMenu" />
            </div>

            <div className="mt-auto lg:hidden">
              <Separator className="mb-3" />
              <div className="flex gap-x-4 items-center">
                {status === "loading" ? (
                  <NavProfile.Loader />
                ) : status === "authenticated" ? (
                  <NavProfile variant="borgerMenu" />
                ) : (
                  <span className="w-full flex flex-col gap-y-3">
                    <div className="flex gap-x-3 items-center justify-between">
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
    </>
  );
}
