import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { type Dictionary } from "@/store/dictionaries/type";
import { type ColumnDef } from "@tanstack/react-table";
import { Badge, Switch } from "@wordigo/ui";

export const columns: ColumnDef<Dictionary>[] = [
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
          <Badge variant="secondary" className="!rounded-md !px-2">
            {row.getValue("numberOfWords")}
          </Badge>
        </span>
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
    accessorKey: "published",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"dictionaries.public"} />,
    cell: ({ row }) => {
      return <div>{row.original.published ? <Switch checked></Switch> : <Switch></Switch>}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
