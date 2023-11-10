import { DataTableRowActions } from "./TableRowAction";
import { DataTable } from "@/components/DataTable/data-table";
import { DataTableColumnHeader } from "@/components/DataTable/data-table-column-header";
import { type DictionaryWord } from "@/store/dictionarayWord/type";
import { type ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import * as React from "react";

interface DictionaryWordsTableShellProps {
  data: DictionaryWord[];
  pageCount?: number;
  isLoading?: boolean;
}

export function DictionarayWordsTable({
  data,
  pageCount,
  isLoading,
}: DictionaryWordsTableShellProps) {
  const { t } = useTranslation();

  const columns = React.useMemo<ColumnDef<DictionaryWord, unknown>[]>(
    () => [
      {
        accessorKey: "text",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t("columns.text")} />
        ),
        cell: ({ row }) => {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className="w-[150px] line-clamp-1 hover:underline"
                  asChild
                >
                  <p>{row.getValue("text")}</p>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{row.getValue("text")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        },
      },
      {
        accessorKey: "translatedText",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={t("columns.translatedText")}
          />
        ),
        cell: ({ row }) => {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className="w-[150px] line-clamp-1 hover:underline"
                  asChild
                >
                  <p>{row.getValue("translatedText")}</p>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{row.getValue("translatedText")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        },
      },
      {
        accessorKey: "time",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t("columns.time")} />
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
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
      },
    ],
    [data]
  );

  return (
    <DataTable<any, DictionaryWord>
      columns={columns}
      data={data}
      pageCount={pageCount || 1}
      // Render notion like filters
      isLoading={isLoading}
      advancedFilter={false}
      // Render dynamic searchable filters
      // searchableColumns={[
      //   {
      //     id: "title",
      //     title: "titles",
      //   },
      // ]}
    />
  );
}
