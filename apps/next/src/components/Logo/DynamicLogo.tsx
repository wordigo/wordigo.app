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

  return <Image className="rounded-md" src={`/images/${getModeIconUrl}.png`} alt="Wordigo Logo" priority={true} width={size} height={size} />;
};

export default DynamicLogo;
