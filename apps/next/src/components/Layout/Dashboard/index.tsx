import Breadcrumb from "./Breadcrumb";
import HomeHeader from "./HomeHeader";
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
      <HomeHeader />
      <div className="m-auto flex px-20">
        <Sidebar />
        <section className="py-4 px-4 md:py-8 md:px-8 w-full m-auto overflow-auto mt-5">
          <main className="flex items-center justify-between w-full mb-6">
            <Breadcrumb />
          </main>
          {children}
        </section>
      </div>
    </main>
  );
}
