import { DataTableRowActions } from "./TableRowAction";
import { DataTable } from "@/components/DataTable/data-table";
import { DataTableColumnHeader } from "@/components/DataTable/data-table-column-header";
import DateTooltip, { IDateMode } from "@/components/UI/DateTooltip";
import { type Dictionary } from "@/store/dictionaries/type";
import { type ColumnDef } from "@tanstack/react-table";
import { Badge, Tooltip, TooltipContent, TooltipTrigger } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import * as React from "react";
import { MdPublic, MdPublicOff } from "react-icons/md";
import { type IDictionary } from "types/global";

interface DictionariesTableShellProps {
  data: Dictionary[];
  pageCount?: number;
  isLoading?: boolean;
}

export function DictionariesTableShell({
  data,
  pageCount,
  isLoading = false,
}: DictionariesTableShellProps) {
  const { t } = useTranslation();
  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<IDictionary, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => {
          return (
            <Link
              href={`/dashboard/dictionaries/${row.original.slug}`}
              className="w-[80px] hover:underline"
            >
              {row.getValue("id")}
            </Link>
          );
        },
        filterFn: (row, id, value) => {
          return row.original.id === value;
        },
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t("columns.title")} />
        ),
        cell: ({ row }) => {
          return (
            <Tooltip>
              <TooltipTrigger
                className="w-[150px] line-clamp-1 hover:underline"
                asChild
              >
                <Link href={`/dashboard/dictionaries/${row.original.slug}`}>
                  {row.getValue("title")}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{row.getValue("title")}</p>
              </TooltipContent>
            </Tooltip>
          );
        },
      },
      {
        accessorKey: "numberOfWords",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={t("columns.numberOfWords")}
          />
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
        accessorKey: "createdDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t("columns.time")} />
        ),
        cell: ({ row }) => (
          <DateTooltip
            date={row.original.createdDate}
            mode={IDateMode.absolute}
          />
        ),
        enableSorting: false,
      },
      {
        accessorKey: "published",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={t("columns.published")}
          />
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
              <p>
                {row.original.published
                  ? t("general.public")
                  : t("general.private")}
              </p>
            </div>
          );
        },
      },
      {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
      },
    ],
    [data]
  );

  return (
    <DataTable<any, Dictionary>
      columns={columns}
      data={data}
      pageCount={pageCount || 1}
      // Render notion like filters
      advancedFilter={false}
      isLoading={isLoading}
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
