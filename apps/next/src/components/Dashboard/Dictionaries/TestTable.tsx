import { DataTable } from "@/components/DataTable/data-table";
import { DataTableColumnHeader } from "@/components/DataTable/data-table-column-header";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@wordigo/ui";
import * as React from "react";
import { type IDictionary } from "types/global";

interface TasksTableShellProps {
  data: any[];
  pageCount: number;
}

export function TasksTableShell({ data, pageCount }: TasksTableShellProps) {
  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<IDictionary, unknown>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Id" />
        ),
        cell: ({ row }) => {
          return <div className="w-[80px]">{row.getValue("id")}</div>;
        },
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
          return <div className="w-[80px]">{row.getValue("title")}</div>;
        },
      },
    ],
    [data]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={10}
      // Render notion like filters
      advancedFilter={false}
      // Render dynamic searchable filters
      searchableColumns={[
        {
          id: "title",
          title: "titles",
        },
      ]}
    />
  );
}
