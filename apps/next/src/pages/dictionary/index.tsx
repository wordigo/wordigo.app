import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/shell";

import DashboardTwoLayout from "./layout";

export default function DashboardPage() {
  return (
    <DashboardTwoLayout>
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Create and manage dashboard."></DashboardHeader>
      </DashboardShell>
    </DashboardTwoLayout>
  );
}
