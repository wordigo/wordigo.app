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
      <main className="container flex flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 pt-16 sm:pt-20 md:pt-24 pb-[72px] sm:pb-24 md:pb-[104px] lg:pb-28">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
