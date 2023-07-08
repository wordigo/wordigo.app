import React, { Fragment } from "react";
import { dashboardConfig } from "@/constants/dashboard";
import useCommonStore from "@/stores/Common";
import { X } from "lucide-react";

import { Button } from "@wordigo/ui";

import { DashboardNav } from "./Navigation";

export default function BurgerMenu() {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <Fragment>
      {showSidebarPanel && (
        <div className="fixed py-[30px] top-0 z-50 g-red-500 px-5 min-w-[300px] max-w-fit rounded-r-2xl border-r-[#1E293B] shadow-2xl shadow-[#1E293B] h-screen">
          <span className="flex  items-center justify-between mb-7">
            <div>Wordingo</div>
            <div onClick={handleSidebar} className="text-end text-[22px]">
              <Button variant="outline" size="icon" className="border-none">
                <X size={"14"} />
              </Button>
            </div>
          </span>
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>

          <hr className="my-[35px]" />

          <div></div>
        </div>
      )}
    </Fragment>
  );
}
