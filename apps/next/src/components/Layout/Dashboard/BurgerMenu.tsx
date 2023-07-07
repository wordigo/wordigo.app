"use client";

import React, { useState } from "react";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "./nav";
import { Button } from "@wordigo/ui";
import { X } from "lucide-react";

export default function BurgerMenu() {
  const [menu, setMenu] = useState(true);
  return (
    <>
      {menu && (
        <div className="fixed py-[30px] px-5 min-w-[300px] max-w-fit bg-[#020817] rounded-r-2xl border-r-[#1E293B] shadow-2xl shadow-[#1E293B] h-screen z-[999]">
          <span className="flex  items-center justify-between mb-7">
            <div>Wordingo</div>
            <div onClick={() => setMenu(!menu)} className="text-end text-[22px]">
              <Button variant='outline' size='icon' className="border-none">
                <X  size={'14'}/>
              </Button>
            </div>
          </span>
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>

          <hr className="my-[35px]" />

          <div>

          </div>
        </div>
      )}
    </>
  );
}
