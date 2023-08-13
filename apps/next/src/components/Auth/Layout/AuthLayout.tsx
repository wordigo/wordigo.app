import { type PropsWithChildren } from "react";
import Link from "next/link";
import HomeHeader from "@/components/Layout/MainLayout/Header";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import { useTranslation } from "next-i18next";

// const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
//   ssr: false,
// }) as FunctionComponent;

const AuthLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <div className="h-screen">
      <HomeHeader />
      <div className="container flex h-full w-screen flex-col items-center justify-center">
        <div className="mx-auto flex flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-6 text-center">
            <div className="text-center">{children}</div>
          </div>
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
