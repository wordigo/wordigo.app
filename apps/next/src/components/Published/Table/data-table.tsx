import * as React from "react";
import Published from "@/components/Published/Published";
import { type IPublished } from "@/components/Published/published.constants";
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTableToolbar } from "./data-table-toolbar";

interface DataTableProps {
  data: IPublished[];
  label: string;
}

export function DataTable({ data }: DataTableProps) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    columns: [],
  });

  return (
    <section className="flex flex-col w-full py-24 px-20">
      <h1 className="text-5xl font-semibold text-center">Learn from published dictionaries</h1>
      <p className="text-xl mt-6 text-muted-foreground text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam possimus, facere fuga ratione aut.
      </p>
      <DataTableToolbar table={table} />
      <Published items={data} />
    </section>
  );
}
