import Link from "next/link";
import NavProfile from "@/components/Layout/NavProfile";
import DynamicIconLogo from "@/components/Logo/DynamicIconLogo";

import DashboardNav from "./Navigation";

export default function BurgerMenu() {
  return (
    <div className="flex flex-col fixed justify-between left-0 py-8 top-0 z-50 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground g-red-500 px-5 min-w-[280px] max-w-[280px] rounded-r-2xl border-r-[#EAECF0] shadow-md shadow-[rgba(16, 24, 40, 1)] h-screen">
      <span>
        <span className="flex items-center justify-between w-full mb-6">
          <Link href={"/"} className="font-bold text-[18px] flex items-center">
            <DynamicIconLogo />
            <h1 className="ml-2">Wordigo</h1>
          </Link>
        </span>
        <aside className="flex w-full flex-col">
          <DashboardNav />
        </aside>
      </span>

      <div className="w-full mr-8">
        <NavProfile variant="dashboard" />
      </div>
    </div>
  );
}
