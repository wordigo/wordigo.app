import { TranslateComponent } from "@/components/Translate";
import { type Column } from "@tanstack/react-table";

import { DropdownMenu, DropdownMenuTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <TranslateComponent head={title} />;
  }

  return (
    <div className={cn("flex items-center space-x-2 pl-4", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TranslateComponent head={title} />
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
