import { type PropsWithChildren } from "react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@wordigo/ui";

import RootLayout from "../Layout";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <RootLayout>{children}</RootLayout>
    </NextThemesProvider>
  );
};

export default AppProviders;
