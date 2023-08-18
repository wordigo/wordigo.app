import React from "react";
import Image from "next/image";

import { cn } from "@wordigo/ui/lib/utils";

function StaticLogo({ className }: { className?: string }) {
  return <Image className={cn("w-[45px] h-[45px] ml-[-3px]", className)} src={`/images/logo.svg`} alt="Wordigo Logo" width={45} height={45} />;
}

export default StaticLogo;
