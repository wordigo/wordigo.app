import Link from "next/link";
import UnderNavigation from "@/components/Layout/Dashboard/Sidebar/Under.Navigation";
import DashboardNavProfil from "@/components/Layout/NavProfile/Navprofile.dashboard";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import DashboardNav from "./Navigation";

export default function BurgerMenu() {
  return (
    <div className="col-span-1 flex flex-col fixed justify-between left-0 md:top-0 bottom-0 right-0 !h-20 md:!h-full py-4 md:py-8 z-50 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground border-t md:border-t-0 g-red-500 px-5 md:min-w-[280px] md:max-w-[280px]  border-r-[#EAECF0] shadow-2xl md:shadow-md shadow-[rgba(16, 24, 40, 1)] h-screen">
      <div>
        <div className="hidden md:flex items-center justify-between w-full mb-6">
          <div className="font-bold text-[18px] flex items-center select-none px-3 pt-3">
            <Link href="/" className="flex items-center justify-center max-w-[128px] min-w-[128px] min-h-[34px]">
              <DynamicLogo size={128} />
            </Link>
          </div>
        </div>
        <aside className="flex w-full md:flex-col">
          <DashboardNav />
        </aside>
      </div>

      <div className="hidden md:block">
        <UnderNavigation />
        <div className="w-full h-[1px] rounded-full dark:bg-[#1E293B] bg-gray-500 bg-opacity-50 my-4 select-none"></div>
        <DashboardNavProfil />
      </div>
    </div>
  );
}
