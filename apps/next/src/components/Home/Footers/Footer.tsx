import ChangeLanguage from "@/components/Layout/MainLayout/ChangeLanguage";
import { GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

import { Button } from "@wordigo/ui";

export default function Footer() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 items-center">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a className="flex-none text-xl font-semibold" href="#">
            Wordigo
          </a>
        </div>

        {/* <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">Product</h4>

         <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Pricing
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Changelog
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Docs
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                Download
              </a>
            </p>
          </div>
        </div> */}

        <div className="grid space-y-3 text-sm">
          <a className="opacity-60 text-xs font-semibold text-gray-900 uppercase dark:text-white" href="#">
            Home
          </a>
        </div>

        <div className="mt-3 grid space-y-3 text-sm">
          <a className="opacity-60 text-xs font-semibold text-gray-900 uppercase dark:text-white" href="#">
            Translate
          </a>
        </div>

        <div className="mt-3 grid space-y-3 text-sm">
          <a className="opacity-60 text-xs font-semibold text-gray-900 uppercase dark:text-white" href="#">
            Dashboard
          </a>
        </div>

        <div className="mt-3 grid space-y-3 text-sm">
          <a className="opacity-60 text-xs font-semibold text-gray-900 uppercase dark:text-white" href="#">
            Team
          </a>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-1 items-center gap-x-3">
            <ChangeLanguage />
            <div className="space-x-4 text-sm ml-4 opacity-80">© Copyright 2023. All Rights Reserved by Wordigo.</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="mt-3 sm:hidden">
              <a className="flex-none text-xl font-semibold text-black" href="#">
                Wordigo
              </a>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2023 Wordigo.</p>
            </div>

            <div className="space-x-2">
              <Button variant="link" size="icon">
                <InstagramIcon size={14} />
              </Button>
              <Button variant="link" size="icon">
                <TwitterIcon size={14} />
              </Button>
              <Button variant="link" size="icon">
                <GithubIcon size={14} />
              </Button>
              <Button variant="link" size="icon">
                <YoutubeIcon size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
