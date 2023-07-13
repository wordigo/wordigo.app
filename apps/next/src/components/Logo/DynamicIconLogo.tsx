import Image from "next/image";
import { LogoIconsEnums } from "@/constants/logos";
import { useTheme } from "next-themes";

export default function DynamicIconLogo() {
  const { theme = "system" } = useTheme();
  const getModeIconUrl = LogoIconsEnums[theme as keyof typeof LogoIconsEnums];

  return <Image src={`/images/${getModeIconUrl}.png`} width={32} height={32} priority={true} alt="" className="rounded-md" />;
}
