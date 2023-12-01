import Banner from "./Banner";
import HomeHeader from "./Header";
import Footer from "@/components/Home/Footers";
import { type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren<{ showBanner?: boolean }>> = ({
  children,
  showBanner = true,
}) => {
  return (
    <>
      {showBanner && <Banner />}
      <HomeHeader />
      <main className="container flex flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 xl:gap-y-32 pt-6 sm:pt-10 md:pt-14 lg:pt-[72px] xl:pt-[88px] pb-[72px] sm:pb-24 md:pb-[104px] lg:pb-28">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
