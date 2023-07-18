import { useRouter } from "next/navigation";
import { EditDictionary } from "@/components/Modals/EditDictionary";
import { api } from "@/libs/trpc";
import { MoreHorizontal } from "lucide-react";
import { type Row } from "react-table";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@wordigo/ui";

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & { id: string }>;
}

export function DataTableRowActions<TData extends object>({ row }: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const { mutate: queryDelete } = api.dictionary.deleteDictionary.useMutation();
  const { id } = row.original;

  const handleDelete = () => {
    queryDelete({
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
      <DropdownMenuContent className="w-[160px] flex flex-col">
        <EditDictionary label="Edit" row={row as never} />
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
