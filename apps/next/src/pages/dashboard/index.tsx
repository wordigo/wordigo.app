import { DashboardHeader } from "@/components/Layout/Dashboard/header";
import { DashboardShell } from "@/components/Layout/Dashboard/shell";

import DashboardTwoLayout from "./layout";

export default function DashboardPage() {
  return (
    <DashboardTwoLayout>
      <DashboardShell>
        <DashboardHeader heading="Posts" text="Create and manage posts."></DashboardHeader>
      </DashboardShell>
    </DashboardTwoLayout>
  );
}
