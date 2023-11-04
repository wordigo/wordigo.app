import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className={cn("grid items-start gap-8 gap-y-4", className)} {...props}>
      {children}
    </div>
  );
}
