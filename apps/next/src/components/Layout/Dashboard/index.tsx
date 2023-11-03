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
    <main className="max-w-[90rem] m-auto">
      <DashboardHeader />
      <div className="m-auto flex px-20 max-8xl:px-5 max-[1022px]:px-0">
        <Sidebar />
        <section className="py-4 px-4 md:py-8 md:px- w-full m-auto overflow-auto mt-14 max-[1022px]:px-5">
          {children}
        </section>
      </div>
    </main>
  );
}
