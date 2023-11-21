import { LogoIconsEnums } from "@/constants/logos";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState, type FC } from "react";

const DynamicIconLogo: FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getModeIconUrl =
    LogoIconsEnums[resolvedTheme as keyof typeof LogoIconsEnums];

  return (
    <Image
      className="rounded-md"
      src={`/images/${getModeIconUrl}.png`}
      alt="Wordigo Logo"
      priority={true}
      width={32}
      height={32}
    />
  );
};

export default DynamicIconLogo;
