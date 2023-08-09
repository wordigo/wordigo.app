"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FlipHorizontal } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent } from "@wordigo/ui";

export function DataTableViewOptions({ table }: { table: any }) {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-4 py-[10px] font-semibold text-sm" variant="outline">
          <FlipHorizontal className="mr-2 h-[15px] w-[15px]" />
          {t("table.columns")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] p-1">
        {table
          .getAllColumns()
          .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                <span className="truncate">{column.id}</span>
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
