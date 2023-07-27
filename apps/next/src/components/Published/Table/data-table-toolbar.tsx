import { type Table } from "@tanstack/react-table";

import { Input } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <Input
      placeholder="Search"
      value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
      onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
      className="mt-10 w-80 mx-auto"
    />
  );
}
