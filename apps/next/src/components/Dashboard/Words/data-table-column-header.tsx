import { TranslateComponent } from "@/components/Translate";
import { DropdownMenu, DropdownMenuTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function DataTableColumnHeader({title, className }: DataTableColumnHeaderProps) {
  return (
    <div className={cn("flex items-end space-x-2 pl-4", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TranslateComponent head={title} />
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
