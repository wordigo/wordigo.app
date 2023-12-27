import Banner from "./Banner";
import GradientSvg from "./GradientSvg";
import HomeHeader from "./Header";
import Footer from "@/components/Layout/MainLayout/Footer";
import { useRouter } from "next/router";
import { useMemo, type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren<{ showBanner?: boolean }>> = ({
  children,
  showBanner = true,
}) => {
  const router = useRouter();
  const isHomeRoute = useMemo(
    () => router.pathname === "/" || router.pathname === "/about",
    [router.pathname]
  );

  return (
    <>
      <div
        className="h-screen w-full absolute top-0 left-0 -z-10 dark:!bg-none"
        style={{
          // ...(isHomeRoute && {
          background:
            "radial-gradient(137.05% 100% at 50% 0%, #FFD9E7 3.59%, #ECFCFF 34.79%, #FFFFFF 100%)",
          // }),
        }}
      >
        <GradientSvg />
      </div>

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
