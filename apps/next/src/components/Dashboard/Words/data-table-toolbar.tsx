import { CreateWord } from "@/components/Modals/CreateWord";
import { CreateDictionary } from "@/components/Modals/ShareApplication";
import { type Table } from "@tanstack/react-table";

import { Input } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  label: string;
}

export function DataTableToolbar<TData>({ table, label }: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter words..."
          value={(table.getColumn("text")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("text")?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <div className="flex items-center gap-3">
        <CreateWord label={label} />
        <CreateDictionary label={"Publish"} />
      </div>
    </div>
  );
}
