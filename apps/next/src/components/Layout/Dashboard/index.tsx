import Breadcrumb from "./Breadcrumb";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "@/components/Layout/Dashboard/Sidebar/Menu";
import PageLoader from "@/components/UI/PageLoader";
import { useAppSelector } from "@/utils/hooks";
import { useSession } from "next-auth/react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = useSession();
  const token = useAppSelector((state) => state.auth.token);

  if (session.status !== "authenticated" || !token) return <PageLoader />;

  return (
    <main>
      <DashboardHeader />
      <div className="max-w-[90rem] m-auto flex max-8xl:px-5 max-[1022px]:px-0">
        <Sidebar />
        <section className="pl-10 md:py-8 w-full m-auto overflow-auto mt-[80px] max-[1022px]:mt-[100px] max-[1022px]:px-5">
          {children}
          {children}
          {children}
          {children}
          {children}
        </section>
      </div>
    </main>
  );
}
