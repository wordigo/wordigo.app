import Link from "next/link";
import UnderNavigation from "@/components/Layout/Dashboard/Sidebar/Under.Navigation";
import DashboardNavProfil from "@/components/Layout/NavProfile/Navprofile.dashboard";
import DynamicLogo from "@/components/Logo/DynamicLogo";

import DashboardNav from "./Navigation";

export default function BurgerMenu() {
  return (
    <div className="col-span-1 flex flex-col fixed justify-between left-0 py-8 top-0 z-50 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground g-red-500 px-5 min-w-[280px] max-w-[280px]  border-r-[#EAECF0] shadow-md shadow-[rgba(16, 24, 40, 1)] h-screen">
      <span>
        <span className="flex items-center justify-between w-full mb-6">
          <div className="font-bold text-[18px] flex items-center select-none px-3 pt-3">
            <Link href="/" className="flex items-center">
              <DynamicLogo size={120} />
              <div className="font-semibold ml-[10px]">Wordigo</div>
            </Link>
          </div>
        </span>
        <aside className="flex w-full flex-col">
          <DashboardNav />
        </aside>
      </span>

      <div>
        <UnderNavigation />
        <div className="w-full h-[1px] rounded-full dark:bg-[#1E293B] bg-gray-500 bg-opacity-50 my-4 select-none"></div>
        <DashboardNavProfil />
      </div>
    </div>
  );
}
