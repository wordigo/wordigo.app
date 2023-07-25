import { type ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  words: z.string(),
  updatedDate: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">{row.getValue("title")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "subscribers",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Subscribers" className="pr-10 text-start" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 ">
          <span className=" truncate font-medium">{row.getValue("subscribers")}000</span>
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Time" />,
    cell: ({ row }) => {
      const timeValue = row.original.updatedDate;
      const dateObj = new Date(timeValue);
      const formattedDate = dateObj.toLocaleDateString();
      return (
        <div className="flex space-x-2">
          <span className=" truncate font-medium">{formattedDate}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
