import { useRouter } from "next/navigation";
import { api } from "@/libs/trpc";
import { MoreHorizontal } from "lucide-react";
import { type Row } from "react-table";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@wordigo/ui";

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & { id: string }>;
}

export function DataTableRowActions<TData extends object>({ row }: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const queryData = api.dictionary.deleteDictionary.useMutation();

  const handleDelete = () => {
    const { id } = row.original;
    queryData.mutate({
      dictionaryId: id,
    });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
