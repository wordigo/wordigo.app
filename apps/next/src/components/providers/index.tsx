import { type PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@acme/ui";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      {children}
    </NextThemesProvider>
  );
};

export default AppProviders;
