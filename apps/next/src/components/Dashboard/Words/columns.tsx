import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { type DictionaryWord } from "@/store/dictionarayWord/type";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@wordigo/ui";

export const columns: ColumnDef<DictionaryWord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "text",
    header: () => <DataTableColumnHeader title="dic_words.text" />,
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium">{row?.original?.text}</span>
      );
    },
  },
  {
    accessorKey: "translateLanguage",
    header: () => <DataTableColumnHeader title="dic_words.translated_text" />,
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium]">
          {row?.original.translatedText}
        </span>
      );
    },
  },
  {
    accessorKey: "time",
    header: () => <DataTableColumnHeader title="dictionaries.time" />,
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
