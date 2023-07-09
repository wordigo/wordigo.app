import { TableDemo } from "@/components/Dictionary/Table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Dictionary">
          <div className="break-words max-w-[1760px]">
            <TableDemo></TableDemo>
          </div>
        </DashboardHeader>
      </DashboardShell>
    </DashboardLayout>
  );
}
