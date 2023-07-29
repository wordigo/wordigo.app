import { Navbar } from "@/components/Layout/Dashboard/Navbar";
import Sidebar from "@/components/Layout/Dashboard/Sidebar/Menu";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
