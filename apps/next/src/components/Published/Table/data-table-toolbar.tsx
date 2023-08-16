import { type Table } from "@tanstack/react-table";
import DataFilter from "./data-filter"
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-end justify-between mt-10">
      <div className="flex">
        <div className="grid">
          <Label htmlFor="search">Search</Label>
          <Input
            placeholder="Search"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
            className="w-80 mt-1.5 max-md:w-48"
            id="search"
          />
        </div>
        {/* <DataFilter/> */}
      </div>
      <div className="flex">
        <Button variant="outline">Clear Filters</Button>
      </div>
    </div>
  );
}
