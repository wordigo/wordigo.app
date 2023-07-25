import { type ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { Badge } from "@wordigo/ui";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  word: z.object({ id: z.string(), translatedText: z.string(), text: z.string(), targetLanguage: z.string(), nativeLanguage: z.string() }),
});

export type Task = z.infer<typeof taskSchema>;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "text",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Word" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge className="truncate font-medium">{row?.original?.word?.targetLanguage}</Badge>
          <span className="max-w-[500px] truncate font-medium">{row?.original?.word?.text}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "translateLanguage",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Translate Word" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge className="truncate font-medium">{row?.original?.word?.nativeLanguage}</Badge>
          <span className=" truncate font-medium">{row?.original?.word?.translatedText}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
