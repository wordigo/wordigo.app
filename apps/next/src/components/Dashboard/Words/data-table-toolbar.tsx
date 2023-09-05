import { CopyWord } from "@/components/Modals/CopyWords";
import { DataTableViewOptions } from "./data-table-view-options.tsx";
import DashboardHeaders, {
  DashboardButton,
} from "@/components/Layout/Dashboard/Headers";
import { type Table } from "@tanstack/react-table";
import { Button, Input } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isHaveData = table.getSelectedRowModel().rows.map((item) => item.original)
  return (
    <main>
      <section className="h-fit flex flex-col md:flex-row md:items-center md:justify-between gap-y-2 md:gap-y-0 w-full">
        <DashboardHeaders />
        <section className="flex items-center gap-2">
          <Input
            placeholder="Filter word..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="w-[292px] lg:w-[250px] text-base px-[14px] py-[10px]"
          />
        </section>
      </section>

      <section className="h-fit flex items-center justify-between gap-y-2 md:gap-y-0 w-full mt-2">
        <div className="space-x-2 flex items-center">
          <DataTableViewOptions table={table} />
          <CopyWord label="dic_words.copyWord" className={cn(isHaveData.length === 0 && "pointer-events-none selection:none")} isHaveData={isHaveData} />
        </div>
        <DashboardButton />
      </section>
    </main>
  );
}
