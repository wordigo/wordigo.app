import { type FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import StaticLogo from "@/components/Logo/StaticLogo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useTranslation } from "next-i18next";

import ThemeMode from "@/components/Layout/ThemeMode";
import ChangeLanguage from "@/components/Layout/MainLayout/ChangeLanguage";

import { cn } from "@wordigo/ui/lib/utils";
import { FaGoogle } from "react-icons/fa";

const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
  ssr: false,
}) as FunctionComponent;

export default function Footer({ className }: { className?: string }) {
  const { t } = useTranslation();
  // flex - col - reverse
  return (
    <div className={cn("relative mx-auto max-w-screen-8xl md:px-12 px-8 max-xl:mb-4", className)}>
      <div className="xl:justify-between xl:flex dark:border-white/5 border-t lg:pt-24 max-lg:pt-12 border-black/30 pb-8">
        <div className="flex flex-col justify-between">
          <div className="items-start flex flex-col">
            <div className="max-w-[110px] mb-1">
              <DynamicLogo />
            </div>
            <p className="text-center text-sm leading-loose md:text-left dark:text-white/50 text-black/50">
              {t("footer.wordigo_description")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 max-xl:mt-10 max-xl:mb-4">
          <div className="md:grid md:gap-16 md:grid-cols-2">
            <div>
              <h3 className="font-semibold opacity-100 hover:opacity-80">
                <Link href={"/"} passHref>
                  {t("navbar.home")}
                </Link>
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                    <Link href="/#features" passHref>
                      {t("navbar.features")}
                    </Link>
                  </p>
                </li>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                      <Link href="/library" passHref>
                        {t("navbar.library")}
                      </Link>
                      <span className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-4 px-3 py-0.5 rounded-full text-white dark:bg-[#3A3E90] bg-[#9272F6]">
                        {t("general.new")}
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                      <Link href="/#pricing" passHref>
                        {t("navbar.pricing")}
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                      <Link href="/#about" passHref>
                        {t("navbar.about")}
                      </Link>
                    </p>
                  </li>
                </ul>
              </ul>
            </div>
            <div>
              <Link href={"/dashboard"} className="font-semibold opacity-100 hover:opacity-80">
                {t("navbar.dashboard")}
              </Link>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                    <Link href={"/dashboard/dictionaries"} passHref>
                      {t("navbar.dictionaries")}
                    </Link>
                  </p>
                </li>
              </ul>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                    <Link href={"/dashboard/settings"} passHref>
                      {t("navbar.settings")}
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:gap-16 md:grid-cols-2">
            <div>
              <h3 className="font-semibold opacity-100 hover:opacity-80">{t("footer.stay_updated")}</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                  <Link href="/" className="text-sm hover:text-opacity-60 hover:dark:opacity-50">
                    {t("footer.license")}
                  </Link>
                </li>
                <li className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                  <Link href="/" className="text-sm hover:text-opacity-60 hover:dark:opacity-50">
                    {t("footer.documentation")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold opacity-100 hover:opacity-80">{t("footer.socials")}</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                  <Link
                    href="https://twitter.com/wordigoapp"
                    className="text-sm flex items-center gap-x-2 hover:text-opacity-60 hover:dark:opacity-50"
                    target="_blank"
                  >
                    <TwitterIcon size={16} />
                    Twitter
                  </Link>
                </li>
                <li className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                  <Link
                    href="https://www.linkedin.com/company/wordigo"
                    className="text-sm flex items-center gap-x-2 hover:text-opacity-60 hover:dark:opacity-50"
                    target="_blank"
                  >
                    <LinkedinIcon size={16} />
                    Linkedin
                  </Link>
                </li>
                <li className="text-sm opacity-70 hover:opacity-100 hover:dark:opacity-100">
                  <Link
                    href="https://github.com/wordigo"
                    className="text-sm flex items-center gap-x-2 hover:text-opacity-60 hover:dark:opacity-50"
                    target="_blank"
                  >
                    <GithubIcon size={16} />
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start space-x-2">
          <ThemeMode />
          <ChangeLanguage />
        </div>
        <p className="text-center text-sm leading-loose md:text-left dark:text-white/50 text-black/50 mt-1">
          {t("footer.copyright")}
          <Link href={"/"} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 ml-1">
            Wordigo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
