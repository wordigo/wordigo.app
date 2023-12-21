import { ConfirmModal } from "@/components/UI/ConfirmDialog";
import {
  useDeleteDictionariesMutation,
  useGetDictionariesMutation,
} from "@/store/dictionaries/api";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { type Row } from "@tanstack/react-table";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@wordigo/ui";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import { type IDictionary } from "types/global";

interface DataTableRowActionsProps {
  row: Row<IDictionary>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { slug } = row.original;
  const { t } = useTranslation();

  const [getDictionaries] = useGetDictionariesMutation();
  const [deleteDictionary, { status, data, isLoading }] =
    useDeleteDictionariesMutation();

  const handleDeleteClick = () => {
    void deleteDictionary({ slug });
  };

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      if (data.success) {
        void getDictionaries({});
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
              <Link
                className="w-full h-full"
                href={`dictionaries/${row.original.slug}`}
              >
                {t("general.detail")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full h-full"
                href={`dictionaries/${row.original.slug}/settings`}
              >
                {t("general.settings")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <ConfirmModal onConfirm={handleDeleteClick} loading={isLoading}>
                <span className="text-red-500 cursor-pointer w-full h-full relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  {t("general.delete")}
                </span>
              </ConfirmModal>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
