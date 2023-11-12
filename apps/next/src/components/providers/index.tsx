import RootLayout from "../Layout";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type PropsWithChildren } from "react";
import { Toaster } from "sonner";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <RootLayout>{children}</RootLayout>
    </NextThemesProvider>
  );
};

export default AppProviders;
