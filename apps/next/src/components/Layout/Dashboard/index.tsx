import { MainNav } from "@/components/Layout/Dashboard/Header/MainNav";
import BurgerMenu from "@/components/Layout/Dashboard/Sidebar/Menu";

import { SiteFooter } from "./Footer";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  heading: string;
}

export default function DashboardLayout({ children, heading }: DashboardLayoutProps) {
  return (
    <div className="flex justify-center min-h-screen flex-col space-y-2 px-20">
      <header className="sticky top-0 z-40 border-b bg-background h-[65px]">
        <div className="m-auto flex h-16 items-center justify-between py-4">
          <MainNav heading={heading} />
        </div>
      </header>
      <div>
        <BurgerMenu />
      </div>
      <main className="relative max-w-[1760px] m-auto w-full flex-1 gap-12 md:grid-cols-[200px_1fr] break-words flex-wrap">
        {children}
        <SiteFooter className="border-t w-full absolute bottom-0 dark:bg-DarkBackground bg-LightBackground break-words flex-wrap" />
      </main>
    </div>
  );
}
