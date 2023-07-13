import Link from "next/link";

import Logo from "../../../components/Logo/DynamicLogo";

export default function Footer() {
  return (
    <footer className="relative max-w-7xl m-auto border-white/5 border-t bg-vulcan-900" aria-labelledby="footer" id="footer">
      <svg
        className="blur-3xl absolute opacity-80 right-0"
        fill="none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="50%"
      >
        <g clip-path="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#4D07E3"></path>
            <path d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z" fill="#4C00FF"></path>
            <path d="M320 400H400V78.75L332.5 211.5L320 400Z" fill="#7fcef3"></path>
            <path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#7fcef3"></path>
          </g>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="719.867"
            id="filter0_f_17_60"
            width="719.867"
            x="-159.933"
            y="-159.933"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
            <feGaussianBlur result="effect1_foregroundBlur_17_60" stdDeviation="79.9667"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-7xl md:px-12 lg:px-32 px-8 py-12 lg:py-24">
        <div className="xl:gap-8 xl:grid xl:grid-cols-4">
          <div className="dark:text-white text-light_text">
            <div className="gap-3 items-center inline-flex w-[140px]">
              <Logo></Logo>
            </div>
            <p className="text-center text-sm leading-loose md:text-left">
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
                    <p className="text-sm text-black opacity-80 hover:text-opacity-60 inline-flex items-center dark:text-white hover:dark:opacity-50">
                      <Link href={"/"} passHref>
                        Translate
                      </Link>{" "}
                      <span className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-4 px-3 py-0.5 rounded-full text-white dark:bg-[#3A3E90] bg-[#9272F6]">
                        New
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm hover:text-opacity-60 text-black opacity-80 dark:text-white hover:dark:opacity-50">
                      <Link href={"/"} passHref>
                        Teams
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold text-light_text dark:text-white hover:dark:opacity-80">Dashboard</h3>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                      <Link href={"/"} passHref>
                        Dictionary
                      </Link>
                    </p>
                  </li>
                </ul>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                      <Link href={"/"} passHref>
                        Translate
                      </Link>
                    </p>
                  </li>
                </ul>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <p className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50">
                      <Link href={"/"} passHref>
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
                      className="text-sm text-black opacity-80 hover:text-opacity-60 dark:text-white hover:dark:opacity-50"
                    >
                      @wordigoapp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
