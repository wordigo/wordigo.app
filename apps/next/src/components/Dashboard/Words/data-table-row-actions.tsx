import { useEffect } from "react";
import { useRouter } from "next/router";
import { EditDictionary } from "@/components/Modals/EditDictionary";
import { useDeleteDicWordMutation, useGetWordDataMutation } from "@/store/word/api";
import { MoreHorizontal } from "lucide-react";
import { type Row } from "react-table";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, useToast } from "@wordigo/ui";

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & { id: string }>;
}

export function DataTableRowActions<TData extends object>({ row }: DataTableRowActionsProps<TData>) {
  const router = useRouter();

  const { id } = row.original;
  const { id: queryID } = router.query as any;

  const [getWordDataMutation] = useGetWordDataMutation();
  const [userDeleteDicWord, { data, status }] = useDeleteDicWordMutation();

  const { toast } = useToast();

  const handleDeleteClick = (event, id) => {
    event.stopPropagation();
    void userDeleteDicWord({
      dictionaryId: queryID,
      wordId: id,
    });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (data.success) {
        void getWordDataMutation(queryID);
        toast({
          variant: "success",
          title: "Successfull",
          description: data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Warning",
          description: data.message,
        });
      }
    }
  }, [status]);

  return (
    <div className="w-full relative z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 p-0 data-[state=open]:bg-muted">
            <MoreHorizontal className="h-4 w-4 absolute right-3" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[160px] flex flex-col">
          <DropdownMenuItem>
            <EditDictionary label="Edit" row={row as never} />
          </DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={(event) => handleDeleteClick(event, id)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
