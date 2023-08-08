import { type ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const taskSchema = z.object({
  word: z.object({ id: z.string(), translatedText: z.string(), text: z.string(), targetLanguage: z.string(), nativeLanguage: z.string() }),
});

export type Task = z.infer<typeof taskSchema>;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "text",
    header: () => <DataTableColumnHeader title={"dic_words.text"} className="min-w-[150px]" column={undefined} />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="truncate font-medium max-w-[280px] break-word min-w-[150px]">{row?.original?.text}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "translateLanguage",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dic_words.translated_text"} />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className=" truncate font-medium max-w-[280px] break-word min-w-[150px]">{row?.original?.translatedText}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.time"} />,
    cell: ({ row }) => {
      const timeValue = row.original.updatedDate;
      const dateObj = new Date(timeValue);
      const formattedDate = dateObj.toLocaleString();
      return <span>{formattedDate}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
