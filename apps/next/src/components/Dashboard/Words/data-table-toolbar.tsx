import { type Table } from "@tanstack/react-table";
import { Input } from "@wordigo/ui";
import { DataTableViewOptions } from "./data-table-view-options.tsx";
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  label: string;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <main className="h-fit flex items-center justify-between w-full">
      <section className="flex items-center gap-2">
        <Input
          placeholder="Filter dictionary..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="w-[150px] lg:w-[250px] focus-visible:ring-0 focus-visible:ring-offset-0 text-base px-[14px] py-[10px]"
        />
        <DataTableViewOptions table={table} />
      </section>
    </main>
  );
}
