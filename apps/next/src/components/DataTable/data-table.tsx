import { DataTableLoading } from "./data-table-loading";
import { DataTablePagination } from "@/components/DataTable/data-table-pagination";
import { DataTableToolbar } from "@/components/DataTable/data-table-toolbar";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@wordigo/ui";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import * as React from "react";
import {
  type DataTableFilterableColumn,
  type DataTableSearchableColumn,
} from "types/global";
import { useDebounce } from "usehooks-ts";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageCount: number;
  filterableColumns?: DataTableFilterableColumn<TData>[];
  searchableColumns?: DataTableSearchableColumn<TData>[];
  advancedFilter?: boolean;
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageCount,
  filterableColumns = [],
  searchableColumns = [],
  advancedFilter = false,
  isLoading = false,
}: DataTableProps<TData, TValue>) {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Search params
  const page = searchParams?.get("page") ?? "1";
  const pageAsNumber = Number(page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  const size = searchParams?.get("size") ?? "10";
  const perPageAsNumber = Number(size);
  const fallbackPerPage = isNaN(perPageAsNumber) ? 10 : perPageAsNumber;
  // const sort = searchParams?.get("sort");
  // const [column, order] = sort?.split(".") ?? [];

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  // Table states
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  // Handle server-side pagination
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: fallbackPage - 1,
      pageSize: fallbackPerPage,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  React.useEffect(() => {
    setPagination({
      pageIndex: fallbackPage - 1,
      pageSize: fallbackPerPage,
    });
  }, [fallbackPage, fallbackPerPage]);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  React.useEffect(() => {
    void router.push(
      `${pathname}?${createQueryString({
        page: pageIndex + 1,
        size: pageSize,
      })}`,
      undefined,
      { shallow: true }
    );
  }, [pageIndex, pageSize]);

  React.useEffect(() => {
    void router.push(
      `${pathname}?${createQueryString({
        page,
      })}`,
      undefined,
      { shallow: true }
    );
  }, [sorting]);

  // Handle server-side filtering
  const debouncedSearchableColumnFilters = JSON.parse(
    useDebounce(
      JSON.stringify(
        columnFilters.filter((filter) => {
          return searchableColumns.find((column) => column.id === filter.id);
        })
      ),
      500
    )
  ) as ColumnFiltersState;

  React.useEffect(() => {
    const columnFilters: ColumnFiltersState = [];
    for (const key of searchParams.keys()) {
      if (searchableColumns.find((column) => column.id === key)) {
        columnFilters.push({
          id: key,
          value: searchParams.get(key),
        });
      }
    }
    setColumnFilters(columnFilters);
    setTimeout(() => {
      setMounted(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    for (const column of debouncedSearchableColumnFilters) {
      if (typeof column.value === "string") {
        void router.push(
          `${pathname}?${createQueryString({
            page: 1,
            [column.id]: typeof column.value === "string" ? column.value : null,
          })}`,
          undefined,
          { shallow: true }
        );
      }
    }

    for (const key of searchParams.keys()) {
      if (
        searchableColumns.find((column) => column.id === key) &&
        !debouncedSearchableColumnFilters.find((column) => column.id === key)
      ) {
        void router.push(
          `${pathname}?${createQueryString({
            page: 1,
            [key]: null,
          })}`,
          undefined,
          { shallow: true }
        );
      }
    }
  }, [JSON.stringify(debouncedSearchableColumnFilters)]);

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    state: {
      pagination,
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  if (isLoading)
    return <DataTableLoading columnCount={columns?.length || 4} rowCount={5} />;
  else
    return (
      <div className="w-full space-y-2.5 overflow-auto">
        <DataTableToolbar
          table={table}
          filterableColumns={filterableColumns}
          searchableColumns={searchableColumns}
          advancedFilter={advancedFilter}
        />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table?.getRowModel()?.rows?.length ? (
                table?.getRowModel()?.rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} />
      </div>
    );
}
