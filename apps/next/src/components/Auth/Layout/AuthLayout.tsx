import { type PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoEnums } from "@/constants/logos";
import { ChevronLeft } from "lucide-react";
import { useTheme } from "next-themes";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

const AuthLayout = ({ children }: PropsWithChildren) => {
  const { theme = "system" } = useTheme();

  const getModeLogoUrl = LogoEnums[theme as keyof typeof LogoEnums];

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center">
            <Image src={`/images/${getModeLogoUrl}.png`} width={200} height={200} priority alt="" className="rounded-md pt-2" />
          </div>
          <div className="text-left">{children}</div>
        </div>
      </div>
    </div>
  );
};

AuthLayout.Title = ({ children }: PropsWithChildren) => <h1 className="text-2xl text-center font-semibold tracking-tight">{children}</h1>;

AuthLayout.Description = ({ children }: PropsWithChildren) => <h1 className="text-sm text-center text-muted-foreground">{children}</h1>;

AuthLayout.Footer = ({ url, children }: PropsWithChildren<{ url: string }>) => (
  <p className="px-8 mt-6 text-center text-sm text-muted-foreground">
    <Link href={url} className="hover:text-brand underline underline-offset-4">
      {children}
    </Link>
  </p>
);

export default AuthLayout;
