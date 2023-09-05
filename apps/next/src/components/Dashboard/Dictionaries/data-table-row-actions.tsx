import { useDeleteUserDictionariesMutation, useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { type Dictionary } from "@/store/dictionaries/type";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, useToast } from "@wordigo/ui";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import { type Row } from "react-table";

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & Dictionary>;
}

export function DataTableRowActions<TData extends object>({ row }: DataTableRowActionsProps<TData>) {
  const { slug } = row.original;
  const { toast } = useToast();
  const { t } = useTranslation();

  const [getUserDictionaries] = useGetUserDictionariesMutation();
  const [deleteWord, { status, data }] = useDeleteUserDictionariesMutation();

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    void deleteWord({ slug });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (data.success) {
        void getUserDictionaries("");
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
    <div className="w-full relative z-50">
      {row.original.title !== "initial" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex h-8 p-0 data-[state=open]:bg-muted">
              <MoreHorizontal className="h-4 w-4 absolute right-3" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[160px] flex flex-col">
            <DropdownMenuItem>
              <Link href={`dictionaries/${row.original.title}/settings`}>{t("general.settings")}</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDeleteClick}>{t("general.delete")}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
