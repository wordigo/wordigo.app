import { cn } from "@wordigo/ui/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const StaticLogo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  const classes = cn(
    "ml-[-3px] rounded",
    theme === "dark" ? "w-[30px] h-[30px]" : "w-[42px] h-[42px]",
    className
  );

  return (
    <Image
      className={classes}
      src={`/images/new-logo.svg`}
      alt="Wordigo Logo"
      width={45}
      height={45}
    />
  );
};

export default StaticLogo;
