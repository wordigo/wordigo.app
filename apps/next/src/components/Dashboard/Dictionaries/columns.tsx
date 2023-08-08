import { type ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { Badge, Switch } from "@wordigo/ui";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  words: z.string(),
  updatedDate: z.string(),
  image: z.string(),
  subscribers: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const columns: ColumnDef<Task>[] = [
  /*{
    id: "titleAndImage",
    header: ({ column }) => (
      <div className="flex space-x-2 mr-10">
        <DataTableColumnHeader column={column} title={"dictionaries.image"} />
        <DataTableColumnHeader column={column} title={"dictionaries.title"} />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 items-center">
          <span className="truncate font-medium mr-2">
            {row.original.image == "" ? (
              <Image src="/images/dictionary_banner.jpg" className="w-[90px] h-[50px] rounded-md" alt="" width={100} height={50}></Image>
            ) : (
              <Image src={row.original.image} alt="" width={100} height={60} className="w-[90px] h-[60px] rounded-md" />
            )}
          </span>
          <span>{row?.original?.title}</span>
        </div>
      );
    },
  },*/
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"ID"} />,
    cell: ({ row }) => {
      return <span>{row.getValue("id")}</span>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.title"} />,
    cell: ({ row }) => {
      return <span>{row.getValue("title")}</span>;
    },
  },
  {
    accessorKey: "numberOfWords",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.word_count"} />,
    cell: ({ row }) => {
      return (
        <span className="ml-6 font-bold">
          <Badge variant="secondary">{row.getValue("numberOfWords")}</Badge>
        </span>
      );
    },
  },
  {
    accessorKey: "published",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.public"} />,
    cell: ({ row }) => {
      return <div className="">{row.original.published ? <Switch checked></Switch> : <Switch></Switch>}</div>;
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.time"} />,
    cell: ({ row }) => {
      const timeValue = row.original.updatedDate;
      const dateObj = new Date(timeValue);
      const formattedDate = dateObj.toLocaleDateString();
      return <span className="ml-3">{formattedDate}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
