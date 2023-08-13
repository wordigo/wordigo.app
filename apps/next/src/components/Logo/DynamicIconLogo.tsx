import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { LogoIconsEnums } from "@/constants/logos";
import { useTheme } from "next-themes";

const DynamicIconLogo: FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getModeIconUrl = LogoIconsEnums[resolvedTheme as keyof typeof LogoIconsEnums];

  return <Image className="" src={`/images/dynamic_icon_logo.svg`} alt="Wordigo Logo" priority={true} width={100} height={100} />;
};

export default DynamicIconLogo;
