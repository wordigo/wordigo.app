import { type FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useTranslation } from "next-i18next";

const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
  ssr: false,
}) as FunctionComponent;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto max-w-screen-8xl md:px-12 px-8 py-12 lg:py-24">
      <div className="xl:gap-8 xl:grid xl:grid-cols-4 dark:border-white/5 border-t lg:pt-24 border-black/30 ">
        <div className="dark:text-white text-light_text">
          <div className="items-center inline-flex w-[140px]">
            <DynamicLogo />
            <div className="font-semibold ml-[10px]">Wordigo</div>
          </div>

          <p className="text-center text-sm leading-loose md:text-left dark:text-gray-400 text-light_text">
            {t("footer.copyright")}
            <Link href={"/"} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 ml-1">
              Wordigo
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 xl:col-span-3">
          <div className="md:grid md:gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">
                <Link href={"/"} passHref>
                  {t("navbar.home")}
                </Link>
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm hover:text-opacity-60 text-black opacity-80 dark:text-white hover:dark:opacity-50">
                    <Link href="/#features" passHref>
                      {t("navbar.features")}
                    </Link>
                  </p>
                </li>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                      <Link href="/library" passHref>
                        {t("navbar.library")}
                      </Link>
                      <span className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-4 px-3 py-0.5 rounded-full text-white dark:bg-[#3A3E90] bg-[#9272F6]">
                        {t("general.new")}
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm hover:text-opacity-60 text-black opacity-80 dark:text-white hover:dark:opacity-50">
                      <Link href="/#pricing" passHref>
                        {t("navbar.pricing")}
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm hover:text-opacity-60 text-black opacity-80 dark:text-white hover:dark:opacity-50">
                      <Link href="/#about" passHref>
                        {t("navbar.about")}
                      </Link>
                    </p>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <Link href={"/dashboard"} className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">
                {t("navbar.dashboard")}
              </Link>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    <Link href={"/dashboard/dictionaries"} passHref>
                      {t("navbar.dictionaries")}
                    </Link>
                  </p>
                </li>
              </ul>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    <Link href={"/dashboard/settings"} passHref>
                      {t("navbar.settings")}
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">{t("footer.stay_updated")}</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <Link href="/" className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    {t("footer.license")}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    {t("footer.documentation")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">{t("footer.socials")}</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <Link
                    href="https://twitter.com/wordigoapp"
                    className="text-sm flex items-center gap-x-2 text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50"
                    target="_blank"
                  >
                    <TwitterIcon size={16} />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/wordigo"
                    className="text-sm flex items-center gap-x-2 text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50"
                    target="_blank"
                  >
                    <LinkedinIcon size={16} />
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/wordigo"
                    className="text-sm flex items-center gap-x-2 text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50"
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
    </div>
  );
}
