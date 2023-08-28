import NavProfile from "../../NavProfile";
import Navigation from "./Navigation";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import StaticLogo from "@/components/Logo/StaticLogo";
import { Badge, Button, Separator, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";

export default function HomeHeader({ className }: { className?: string }) {
  const { t } = useTranslation();
  const { status } = useSession();

  const [isMenuOpen, setMenuOpen] = useState(false); // State for burger menu

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={cn("w-full fixed max-w-[90rem] bg-LightBackground dark:bg-DarkBackground z-50", className)}>
        <nav className="flex items-center justify-between w-full m-auto py-[1.125rem] px-20 max-md:px-4">
          <div className="flex items-center">
            <Link href="/" className={cn("flex items-center mr-6 justify-center", !toggleMenu && "hidden")}>
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
          <Button onClick={toggleMenu} className="lg:hidden text-black bg-transparent bg-white" variant="outline" size="icon">
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
            className="col-span-1 flex flex-col fixed justify-between top-0 right-0 z-50 py-4 text-light_text dark:text-white bg-LightBackground dark:bg-DarkBackground g-red-500 px-5 min-w-[280px] max-w-[280px] border-l shadow-md shadow-[rgba(16, 24, 40, 1)] h-screen lg:hidden"
          >
            <span className="flex items-center flex-col w-full mb-8">
              <div className="font-bold text-[18px] flex items-center select-none pt-3 justify-between w-full">
                <Link href="/" className={cn("flex items-center mr-6 max-w-[128px]  min-w-[128px]", !toggleMenu && "hidden")}>
                  <DynamicLogo size={128} />
                </Link>
                <Button onClick={toggleMenu} className="text-black dark:text-white !h-9 !w-9" variant="outline" size="icon">
                  <X size={19} />
                </Button>
              </div>

              <div className="flex w-full md:flex-col py-4">
                <Navigation variant="borgerMenu" />
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
                  <span className="w-full flex items-center justify-between">
                    <Link
                      href="/auth/signin"
                      className={buttonVariants({
                        variant: "outline",
                        className: "bg-transparent mr-4 w-full text-black dark:text-white",
                      })}
                    >
                      {t("navbar.signin")}
                    </Link>
                    <Link
                      href="/auth/signup"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          className: "w-full",
                        })
                      )}
                    >
                      {t("navbar.signup")}
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
