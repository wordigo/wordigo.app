import { type FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TwitterIcon } from "lucide-react";

const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
  ssr: false,
}) as FunctionComponent;

export default function Footer() {
  return (
    <div className="relative mx-auto max-w-screen-8xl md:px-12 px-8 py-12 lg:py-24">
      <div className="xl:gap-8 xl:grid xl:grid-cols-4 dark:border-white/5 border-t lg:pt-24 border-black/30 ">
        <div className="dark:text-white text-light_text">
          <div className="gap-3 items-center inline-flex w-[140px]">
            <DynamicLogo />
          </div>

          <p className="text-center text-sm leading-loose md:text-left text-light_text">
            © Copyright 2023. All Rights Reserved by
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
                  Home
                </Link>
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm hover:text-opacity-60 text-black opacity-80 dark:text-white hover:dark:opacity-50">
                    <Link href={"/about"} passHref>
                      About
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <Link href={"/dashboard"} className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">
                Dashboard
              </Link>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    <Link href={"/dashboard/dictionary"} passHref>
                      Dictionary
                    </Link>
                  </p>
                </li>
              </ul>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    <Link href={"/dashboard/translate"} passHref>
                      Translate
                    </Link>
                    <span className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-4 px-3 py-0.5 rounded-full text-white dark:bg-[#3A3E90] bg-[#9272F6]">
                      New
                    </span>
                  </p>
                </li>
              </ul>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    <Link href={"/dashboard/settings"} passHref>
                      Settings
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">Stay updated</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <Link href="/" className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    License
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">Socials</h3>
              <ul className="mt-4 space-y-2" role="list">
                <li>
                  <Link
                    href="https://twitter.com/wordigoapp"
                    className="text-sm flex items-center gap-x-2 text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50"
                  >
                    <TwitterIcon size={16} />
                    Twitter
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
