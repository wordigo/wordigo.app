import { type Column } from "@tanstack/react-table";
import { useTranslation } from "next-i18next";

import { DropdownMenu, DropdownMenuTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({ title, className }: DataTableColumnHeaderProps<TData, TValue>) {
  const { t } = useTranslation();
  return (
    <div className={cn("flex items-center space-x-2 pl-4 mr-10", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>{t(title)}</span>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
