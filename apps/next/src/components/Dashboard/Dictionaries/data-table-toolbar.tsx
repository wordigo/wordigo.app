import { CreateDictionary } from "@/components/Modals/CreateDictionary";
import { ShareDictionary } from "@/components/Modals/ShareDictionary";
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
          placeholder="Filter dictionary..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <span className="flex items-center gap-3">
        <CreateDictionary label={label} />
      </span>
    </div>
  );
}
