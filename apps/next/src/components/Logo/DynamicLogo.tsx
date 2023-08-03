import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemedImage: FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let srcImage: string;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  switch (resolvedTheme) {
    case "light":
      srcImage = "/images/logo-dark.png";
      break;
    case "dark":
      srcImage = "/images/logo-white.png";
      break;
    default:
      srcImage = "/images/logo-dark.png";
      break;
  }

  return <Image className="rounded-md" src={srcImage} alt="Wordigo Logo" priority={true} width={200} height={200} />;
};

export default ThemedImage;
