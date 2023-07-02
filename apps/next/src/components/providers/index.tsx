import { type PropsWithChildren } from "react";
import { Toaster } from "@wordigo/ui";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      {children}
    </NextThemesProvider>
  );
};

export default AppProviders;
