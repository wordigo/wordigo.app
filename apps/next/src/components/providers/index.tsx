import RootLayout from "../Layout";
import { TooltipProvider } from "@wordigo/ui";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type PropsWithChildren } from "react";
import { Toaster } from "sonner";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <TooltipProvider delayDuration={300}>
        <RootLayout>{children}</RootLayout>
      </TooltipProvider>
    </NextThemesProvider>
  );
};

export default AppProviders;
