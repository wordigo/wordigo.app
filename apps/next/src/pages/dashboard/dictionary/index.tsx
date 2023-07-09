import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";

import { columns } from "./components/data-table/columns";
import { DataTable } from "./components/data-table/data-table";
import tasks from "./components/tasks.json";

export default function DashboardPage() {
  return (
    <DashboardLayout heading="Dictionary">
      <DashboardShell>
        <DashboardHeader>
          <DataTable columns={columns} data={tasks} />
        </DashboardHeader>
      </DashboardShell>
    </DashboardLayout>
  );
}
