import { useTranslation } from "next-i18next";

import { DropdownMenu, DropdownMenuTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

interface DataTableColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function DataTableColumnHeader({ title, className }: DataTableColumnHeaderProps) {
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
