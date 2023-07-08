import { ArrowRightIcon } from "lucide-react";

import { Button } from "@wordigo/ui";

const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#cfe6fc] dark:bg-[#3377F6] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#864ac3] dark:from-[#cfe6fc] to-[#0e4096] dark:to-[#cfe6fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#6f2ab5] dark:from-[#cfe6fc] to-[#0e4096] dark:to-[#cfe6fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="text-sm leading-6 text-gray-900 dark:text-white">
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current text-white" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi?
        </div>
        <Button className="flex gap-x-2 !h-8" variant="secondary">
          Register now
          <ArrowRightIcon size={14} />
        </Button>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;