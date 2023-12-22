import { LogoEnums, type LogoIconsEnums } from "@/constants/logos";
import { cn } from "@wordigo/ui/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { type FC } from "react";

const DynamicLogo: FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme } = useTheme();

  const getModeIconUrl =
    LogoEnums[resolvedTheme as keyof typeof LogoIconsEnums];

  return (
    <div className={cn("relative w-[165px] h-[64px]", className)}>
      <Image
        className="rounded-md"
        src={`/images/${getModeIconUrl}.png`}
        alt="Wordigo Logo"
        fill
      />
    </div>
  );
};

export default DynamicLogo;
