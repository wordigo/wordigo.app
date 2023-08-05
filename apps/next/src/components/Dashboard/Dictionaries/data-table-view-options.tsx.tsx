"use client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FlipHorizontal } from "lucide-react";

import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent } from "@wordigo/ui";

export function DataTableViewOptions({ table }: { table: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="focus-visible:ring-0 focus-visible:ring-offset-0" variant="outline">
          <FlipHorizontal className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]">
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
