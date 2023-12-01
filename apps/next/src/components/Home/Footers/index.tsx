import ChangeLanguage from "@/components/Layout/MainLayout/ChangeLanguage";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { type FunctionComponent } from "react";

const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
  ssr: false,
}) as FunctionComponent;

const ThemeMode = dynamic(() => import("@/components/Layout/ThemeMode"), {
  ssr: false,
}) as FunctionComponent;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer aria-labelledby="footer" id="footer" className="container">
      <div className="w-full border-t"></div>

      <section className="py-10 sm:py-[52px] md:py-16 lg:py-20 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-x-[60px] gap-y-10">
        <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 xl:gap-y-8">
          <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 xl:gap-y-8">
            <div className="max-w-[150px] sm:max-w-[165px] md:max-w-[180px] lg:max-w-[200px]">
              <DynamicLogo />
            </div>
            <p className="text-sm leading-loose max-w-[250px] lg:max-w-[325px]">
              {t("footer.wordigo_description")}
            </p>
          </div>

          <ul className="flex gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 text-sm dark:text-white/70 text-black/90">
            <li>
              <Link
                href="https://twitter.com/wordigoapp"
                className="flex items-center gap-x-1.5 transition-colors hover:dark:text-white hover:text-black/50"
                target="_blank"
              >
                <TwitterIcon size={17} />
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/wordigo"
                className="flex items-center gap-x-1.5 transition-colors hover:dark:text-white hover:text-black/50"
                target="_blank"
              >
                <LinkedinIcon size={17} />
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wordigo"
                className="flex items-center gap-x-1.5 transition-colors hover:dark:text-white hover:text-black/50"
                target="_blank"
              >
                <GithubIcon size={17} />
                Github
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 gap-y-8">
          <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
            <h3 className="font-bold text-sm lg:text-base">
              <Link
                href={"/"}
                passHref
                className="transition-colors hover:dark:text-white/70 hover:text-black/50"
              >
                {t("navbar.home")}
              </Link>
            </h3>
            <ul
              className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 text-sm lg:text-base dark:text-white/70 text-black/90"
              role="list"
            >
              <li>
                <Link
                  href="/blogs"
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("navbar.blogs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("navbar.library")}

                  <div className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-2 px-2 py-0.5 rounded text-white dark:text-white bg-primary dark:bg-primary-foreground">
                    {t("general.new")}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("faq.nav")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
            <h3 className="font-bold text-sm lg:text-base">
              <Link
                href={"/dashboard"}
                passHref
                className="transition-colors hover:dark:text-white/70 hover:text-black/50"
              >
                {t("navbar.dashboard")}
              </Link>
            </h3>
            <ul
              className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 text-sm lg:text-base dark:text-white/70 text-black/90"
              role="list"
            >
              <li>
                <Link
                  href={"/dashboard/dictionaries"}
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("navbar.dictionaries")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/settings"}
                  passHref
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("navbar.settings")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
            <h3 className="font-bold text-sm lg:text-base">
              {t("footer.stay_updated")}
            </h3>
            <ul
              className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 text-sm lg:text-base dark:text-white/70 text-black/90"
              role="list"
            >
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("footer.license")}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:dark:text-white hover:text-black/50"
                >
                  {t("footer.documentation")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full border-t"></div>

      <section className="flex flex-col-reverse sm:flex-row sm:justify-between md:items-center gap-[18px] py-10 sm:lg:py-11 md:py-12">
        <ul
          className="mt-1.5 md:mt-0 flex flex-col sm:flex-wrap sm:flex-row md:items-center gap-4 sm:gap-5 md:gap-4 text-xs lg:text-sm dark:text-white/70 text-black/90"
          role="list"
        >
          <li>
            <Link
              href="/post/privacy-policy"
              passHref
              className="transition-colors hover:dark:text-white hover:text-black/50"
            >
              {t("privacy_policy.title")}
            </Link>
          </li>
          <li className="hidden md:inline w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full dark:bg-white/70 bg-black/90"></li>
          <li>
            <Link
              href="/"
              className="transition-colors hover:dark:text-white hover:text-black/50"
            >
              Terms & conditions
            </Link>
          </li>
          <li className="hidden md:inline w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full dark:bg-white/70 bg-black/90"></li>
          <li>
            {t("footer.copyright")}
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 ml-1 transition-colors hover:dark:text-white hover:text-black"
            >
              Wordigo
            </Link>
            .
          </li>
        </ul>

        <div className="flex gap-x-2">
          <ChangeLanguage />
          <ThemeMode />
        </div>
      </section>
    </footer>
  );
}
