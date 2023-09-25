import { cn } from "@wordigo/ui/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ui-animate-pulse ui-rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
