import { type PropsWithChildren } from "react";

import HomeHeader from "./Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="max-w-[90rem] m-auto">
      <HomeHeader />
      <div className="flex flex-col gap-y-10">{children}</div>
    </main>
  );
};

export default MainLayout;
