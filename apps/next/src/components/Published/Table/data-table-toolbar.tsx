import DataFilter from "./data-filter";
import { type Table } from "@tanstack/react-table";
import { Button, Input, Label } from "@wordigo/ui";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <main className="flex items-end justify-between mt-10 max-lg:flex-col max-lg:space-y-5 max-lg:justify-center max-lg:items-center">
      <section>
        <Label htmlFor="search">Search</Label>
        <Input
          placeholder="Search"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-80 mt-1.5 max-md:w-48"
          id="search"
        />
      </section>
      <section className="flex items-center space-x-2 max-md:flex-col max-md:space-y-5">
        <DataFilter />
        <Label htmlFor="clearFilters">
          <Button variant="outline" className="md:mt-[1.2rem]">Clear Filters</Button>
        </Label>
      </section>
    </main>
  );
}
