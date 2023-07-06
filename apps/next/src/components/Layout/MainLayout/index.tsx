import { Fragment, type PropsWithChildren } from "react";
import HomeHeader from "@/components/home/Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <HomeHeader />
      <div className="flex flex-col gap-y-10">{children}</div>
    </Fragment>
  );
};

export default MainLayout;
