import Banner from "./Banner";
import HomeHeader from "./Header";
import { type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Banner />
      <main className="max-w-[90rem] m-auto">
        <HomeHeader className="top-0 sticky" />
        <div className="flex flex-col">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
