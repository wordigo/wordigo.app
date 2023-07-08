import { dashboardConfig } from "@/constants/dashboard";
import useCommonStore from "@/stores/Common";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import Navigation from "../../MainLayout/Header/Navigation";
import { DashboardNav } from "./Navigation";

export default function BurgerMenu() {
  const { showSidebarPanel, setSidebarPanel } = useCommonStore((state) => state);
  const { showDetailDictionary } = useCommonStore();

  const handleSidebar = () => {
    setSidebarPanel(!showSidebarPanel);
  };

  return (
    <AnimatePresence>
      {showSidebarPanel && (
        <motion.div
          className="flex flex-col justify-between fixed left-0 py-[30px] top-0 z-50 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground g-red-500 px-5 min-w-[300px] max-w-fit rounded-r-2xl border-r-[#1E293B] shadow-2xl shadow-[#1E293B] h-screen"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
        >
          <span>
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

            <div className={cn("transition-opacity duration-1000 opacity-0", showDetailDictionary && "opacity-100")}>
              {showDetailDictionary && <div className="transition-opacity duration-1000">TEST PAGE</div>}
            </div>
          </span>

          <div className="w-full">
            <h1 className="text-[12px] my-4">© 2023 Wordigo.</h1>
            <Navigation variant="Sidebar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
