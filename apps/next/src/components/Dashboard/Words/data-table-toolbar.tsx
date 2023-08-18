import { DataTableViewOptions } from "./data-table-view-options.tsx";
import DashboardHeaders, {
  DashboardButton,
} from "@/components/Layout/Dashboard/Headers";
import { type Table } from "@tanstack/react-table";
import { Input } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
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
        <DataTableViewOptions table={table} />
        <DashboardButton />
      </section>
    </main>
  );
}
