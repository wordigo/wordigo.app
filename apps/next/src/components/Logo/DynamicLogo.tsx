import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { LogoEnums, type LogoIconsEnums } from "@/constants/logos";
import { useTheme } from "next-themes";

const DynamicLogo: FC<{ size?: number }> = ({ size = 200 }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getModeIconUrl = LogoEnums[resolvedTheme as keyof typeof LogoIconsEnums];

  return <Image className="w-[32px] h-[32px]" src={`/images/dynamic_logo.svg`} alt="Wordigo Logo" width={32} height={32} />;
};

export default DynamicLogo;
