import Banner from "./Banner";
import HomeHeader from "./Header";
import Footer from "@/components/Home/Footers";
import Newsletter from "@/components/Home/Newsletter";
import { type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren<{ showBanner?: boolean }>> = ({
  children,
  showBanner = true,
}) => {
  return (
    <>
      {showBanner && <Banner />}
      <HomeHeader />
      <main className="container flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 py-16 sm:py-20 md:py-24">
        {children}
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
