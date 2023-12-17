import { DataTableToolbar } from "./data-table-toolbar";
import Published from "@/components/Company/Published/PublishedItem";
import { type IPublished } from "@/components/Published/published.constants";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";

interface DataTableProps {
  data: IPublished[];
  label: string;
}

export function DataTable({ data }: DataTableProps) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
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
    <section className="flex flex-col w-full py-24 max-xl:py-16 px-20 max-md:px-4">
      <h1 className="text-5xl font-semibold text-center max-xl:text-4xl max-md:text-2xl">
        Learn from published dictionaries
      </h1>
      <p className="text-xl mt-6 text-muted-foreground text-center max-xl:text-lg max-xl:mt-4 max-md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam
        possimus, facere fuga ratione aut.
      </p>
      <DataTableToolbar table={table} />
      <Published items={data} />
    </section>
  );
}
