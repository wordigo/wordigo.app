import RootLayout from "../Layout";
import { Toaster } from "@wordigo/ui";
// import { AuthContext, useAuth } from "@/hooks/useAuthStore";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type PropsWithChildren } from "react";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <RootLayout>{children}</RootLayout>
    </NextThemesProvider>
  );
};

export default AppProviders;
