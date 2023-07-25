import { type Column } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon, EyeOff, SortAscIcon } from "lucide-react";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2 pl-4", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>{title}</span>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
