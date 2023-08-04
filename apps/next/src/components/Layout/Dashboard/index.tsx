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
    <main className="flex w-full my-8">
      <Sidebar />
      <div className="px-5 min-w-[280px] max-w-[280px]"></div>
      <section className="w-full mx-8 overflow-auto">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
