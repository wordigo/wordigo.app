import { SiteFooter } from "@/components/Layout/Dashboard/Footer";
import { MainNav } from "@/components/Layout/Dashboard/Header/MainNav";
import BurgerMenu from "@/components/Layout/Dashboard/Sidebar/Menu";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  heading: string;
}

export default function DashboardLayout({ children, heading }: DashboardLayoutProps) {
  return (
    <div className="flex justify-center min-h-screen flex-col space-y-2 px-20">
      <header className="sticky top-0 z-40 border-b bg-background h-[65px]">
        <div className="m-auto flex h-16 items-center justify-between py-4">
          <MainNav
            heading={heading}
            user={{
              name: "Ali Osman",
              image: "https://lh3.googleusercontent.com/a/AAcHTtczzH11A-_TB88rKRqjREKz7sViMrikNGPAvyTxa1tXJw=s96-c",
              email: "dlsmnosman@gmail.com",
            }}
          />
        </div>
      </header>
      <div>
        <BurgerMenu />
      </div>
      <main className="max-w-[1760px] m-auto w-full flex-1 gap-12 md:grid-cols-[200px_1fr] break-words flex-wrap">{children}</main>
      <SiteFooter className="border-t fixed w-full bottom-0 dark:bg-DarkBackground bg-LightBackground" />
    </div>
  );
}
