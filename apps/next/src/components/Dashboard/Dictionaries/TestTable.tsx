import { DataTable } from "@/components/DataTable/data-table";
import { DataTableColumnHeader } from "@/components/DataTable/data-table-column-header";
import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@wordigo/ui";
import * as React from "react";
import { MdPublic, MdPublicOff } from "react-icons/md";
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
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => {
          return <div className="w-[80px]">{row.getValue("id")}</div>;
        },
        filterFn: (row, id, value) => {
          return row.original.id === value;
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
      {
        accessorKey: "numberOfWords",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Word Count" />
        ),
        cell: ({ row }) => {
          return (
            <span className="ml-6 font-bold">
              <Badge variant="secondary" className="!rounded-md !px-2">
                {row.getValue("numberOfWords")}
              </Badge>
            </span>
          );
        },
      },
      {
        accessorKey: "time",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={"Created Date"} />
        ),
        cell: ({ row }) => {
          const timeValue = row.original.updatedDate;
          const dateObj = new Date(timeValue);
          const formattedDate = dateObj.toLocaleString();
          return <span>{formattedDate}</span>;
        },
        enableSorting: false,
      },
      {
        accessorKey: "published",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Public Status" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-x-1 items-center">
              {row.original.published ? (
                <MdPublic
                  className="mr-2 h-4 w-4 text-muted-foreground"
                  size={14}
                />
              ) : (
                <MdPublicOff
                  className="mr-2 h-4 w-4 text-muted-foreground"
                  size={14}
                />
              )}
              <p>{row.original.published ? "Public" : "Private"}</p>
            </div>
          );
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
