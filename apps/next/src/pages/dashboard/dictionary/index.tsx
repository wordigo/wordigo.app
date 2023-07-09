import { columns } from "@/components/Dashboard/Dictionary/data-table/columns";
import { DataTable } from "@/components/Dashboard/Dictionary/data-table/data-table";
import tasks from "@/components/Dashboard/Dictionary/data-table/tasks.json";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";

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
