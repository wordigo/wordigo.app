import React from "react";
import Image from "next/image";

import { cn } from "@wordigo/ui/lib/utils";

function StaticLogo({ className }: { className?: string }) {
  return <Image className={cn("w-[32px] h-[32px]", className)} src={`/images/logo.svg`} alt="Wordigo Logo" width={32} height={32} />;
}

export default StaticLogo;
