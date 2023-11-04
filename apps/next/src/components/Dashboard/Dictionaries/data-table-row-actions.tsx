import { useDeleteDicWordMutation } from "@/store/dictionarayWord/api";
import { useGetDictionariesMutation } from "@/store/dictionaries/api";
import { Row } from "@tanstack/react-table";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useToast,
} from "@wordigo/ui";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import { IDictionary } from "types/global";

interface DataTableRowActionsProps {
  row: Row<IDictionary>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { slug } = row.original;
  const { toast } = useToast();
  const { t } = useTranslation();

  const [getDictionaries] = useGetDictionariesMutation();
  const [deleteWord, { status, data }] = useDeleteDicWordMutation();

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    void deleteWord({ slug });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (data.success) {
        void getDictionaries("");
        toast({
          variant: "success",
          title: t("notifications.success"),
          description: t("notifications.deleted_dictionary"),
        });
      } else {
        toast({
          variant: "destructive",
          title: t("notifications.warning"),
          description: data.message,
        });
      }
    }
  }, [status]);

  return (
    <div className="w-full relative z-10">
      {row.original.title !== "initial" && (
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
            <DropdownMenuItem>
              <Link href={`dictionaries/${row.original.slug}`}>
                {t("general.detail")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`dictionaries/${row.original.slug}/settings`}>
                {t("general.settings")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500 cursor-pointer"
              onClick={handleDeleteClick}
            >
              {t("general.delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
