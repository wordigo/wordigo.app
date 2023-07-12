import { useRouter } from "next/navigation";
import { api } from "@/libs/trpc";
import { MoreHorizontal } from "lucide-react";
import { type Row } from "react-table";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@wordigo/ui";
import { EditDictionary } from "@/components/Popup/EditDictionary";
import { CreateDictionary } from "../../../Popup/CreateDictionary";

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & { id: string }>;
}

export function DataTableRowActions<TData extends object>({ row }: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const queryDelete = api.dictionary.deleteDictionary.useMutation();
  const queryEdit = api.dictionary.updateDictionary.useMutation();

  const handleDelete = () => {
    const { id } = row.original;
    queryDelete.mutate({
      dictionaryId: id,
    });
    router.refresh();
  };

  const handleEdit = () => {
    const { id } = row.original;
    queryEdit.mutate({
      dictionaryId: id,
      published: false,
      title: "TEST updateDictionary",
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
        <EditDictionary label="Edit" />
        <CreateDictionary label="Share" />
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
