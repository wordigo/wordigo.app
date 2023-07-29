import { MainNav } from "@/components/Layout/Dashboard/Header/MainNav";
import { CreateDictionary } from "@/components/Modals/CreateDictionary";
import { type Table } from "@tanstack/react-table";

import { Input } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  label: string;
}

export function DataTableToolbar<TData>({ table, label }: DataTableToolbarProps<TData>) {
  return (
    <main className="h-fit flex items-center justify-between w-full">
      <section>
        <Input
          placeholder="Filter dictionary..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="w-[150px] lg:w-[250px] focus-visible:ring-0 focus-visible:ring-offset-0 text-base px-[14px] py-[10px]"
        />
      </section>
      <section className="flex items-center">
        <CreateDictionary label={label} />
      </section>
    </main>
  );
}
