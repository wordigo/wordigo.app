import { Navbar } from "@/components/Layout/Dashboard/Navbar";
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
    <main className="flex items-center">
      <div className="md:min-w-[280px] md:max-w-[280px]">
        <Sidebar />
      </div>
      <section className="py-4 px-4 md:py-8 md:px-8 max-w-[92rem] w-full m-auto overflow-auto">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
