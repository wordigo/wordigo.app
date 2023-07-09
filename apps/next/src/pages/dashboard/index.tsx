import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";

export default function DashboardPage() {
  return (
    <DashboardLayout heading="Dashboard">
      <DashboardShell>
        <DashboardHeader text="Create and manage dashboard."></DashboardHeader>
      </DashboardShell>
    </DashboardLayout>
  );
}
