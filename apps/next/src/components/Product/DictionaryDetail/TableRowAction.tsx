import {
  useDeleteDicWordMutation,
  useGetDictionaryWordsMutation,
} from "@/store/dictionarayWord/api";
import { type DictionaryWord } from "@/store/dictionarayWord/type";
import { useGetDictionariesMutation } from "@/store/dictionaries/api";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { type Row } from "@tanstack/react-table";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@wordigo/ui";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "sonner";

interface DataTableRowActionsProps {
  row: Row<DictionaryWord>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const router = useRouter();
  const { id } = row.original;
  const { slug } = router.query as { slug: string };
  const { t } = useTranslation();

  const [getDictionaries] = useGetDictionariesMutation();
  const [deleteWord, { status, data }] = useDeleteDicWordMutation();
  const [getDictionaryWordMutation] = useGetDictionaryWordsMutation();

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    void deleteWord({ wordId: Number(id), slug });
  };

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      if (data.success) {
        void getDictionaries({});
        void getDictionaryWordMutation({ slug });
        toast.success(t("notifications.success"), {
          description: t("notifications.deleted_dictionary"),
        });
      } else {
        toast.error(t("notifications.warning"), {
          description: data.message,
        });
      }
    }
  }, [status]);

  return (
    <div className="w-full relative z-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4 absolute right-3" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[160px] flex flex-col">
          <DropdownMenuItem
            className="text-red-500 cursor-pointer"
            onClick={handleDeleteClick}
          >
            {t("general.delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
