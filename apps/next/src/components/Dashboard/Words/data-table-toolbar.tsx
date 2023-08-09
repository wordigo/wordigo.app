import DashboardHeaders, { DashboardButton } from "@/components/Layout/Dashboard/Headers";
import { type Table } from "@tanstack/react-table";

import { Input } from "@wordigo/ui";

import { DataTableViewOptions } from "./data-table-view-options.tsx";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <main>
      <section className="h-fit flex items-center justify-between w-full">
        <DashboardHeaders />
        <section className="flex items-center gap-2">
          <Input
            placeholder="Filter word..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
            className="w-[292px] lg:w-[250px] text-base px-[14px] py-[10px]"
          />
        </section>
      </section>

      <section className="h-fit flex items-center justify-between w-full mt-6">
        <DataTableViewOptions table={table} />
        <DashboardButton />
      </section>
    </main>
  );
}
