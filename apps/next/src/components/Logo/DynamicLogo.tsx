import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { LogoEnums, type LogoIconsEnums } from "@/constants/logos";
import { useTheme } from "next-themes";
import { cn } from "@wordigo/ui/lib/utils";

// const DynamicLogo: FC<{ size?: number }> = ({ size = 200 }) => {

const DynamicLogo = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getModeIconUrl = LogoEnums[resolvedTheme as keyof typeof LogoIconsEnums];

  return <Image className={cn("w-[32px] h-[32px]", className)} src={`/images/dynamic_logo.svg`} alt="Wordigo Logo" width={32} height={32} />;
};

export default DynamicLogo;
