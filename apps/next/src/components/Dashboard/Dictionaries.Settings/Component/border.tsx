import { cn } from "@wordigo/ui/lib/utils";
import React from "react";

export default function border({ className }: { className?: string }) {
  return <div className={cn("w-full h-[1px] bg-gray-300 dark:bg-gray-800 rounded-full my-5", className)}></div>;
}
