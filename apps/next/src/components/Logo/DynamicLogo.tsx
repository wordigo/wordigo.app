import Image from "next/image";
import { LogoEnums } from "@/constants/logos";
import { useTheme } from "next-themes";

export default function DynamicLogo() {
  const { theme = "system" } = useTheme();
  const getModeLogoUrl = LogoEnums[theme as keyof typeof LogoEnums];

  return <Image src={`/images/${getModeLogoUrl}.png`} width={200} height={200} priority={true} alt="" className="rounded-md pt-2" />;
}
