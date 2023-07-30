import { type FunctionComponent, type PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "next-i18next";

import { buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
  ssr: false,
}) as FunctionComponent;

const AuthLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        {t("auth_layout.back")}
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-6 text-center">
          <div className="flex items-center justify-center">
            <DynamicLogo />
          </div>
          <div className="text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

AuthLayout.Title = ({ children }: PropsWithChildren) => <h1 className="text-2xl font-semibold tracking-tight">{children}</h1>;

AuthLayout.Description = ({ children }: PropsWithChildren) => <h1 className="text-sm text-muted-foreground mt-1">{children}</h1>;

AuthLayout.Footer = ({ url, children }: PropsWithChildren<{ url: string }>) => (
  <p className="px-8 mt-6 text-sm text-muted-foreground">
    <Link href={url} className="hover:text-brand">
      {children}
    </Link>
  </p>
);

export default AuthLayout;
