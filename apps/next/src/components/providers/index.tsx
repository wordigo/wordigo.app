import { type PropsWithChildren } from "react";
import { AuthContext, useAuth } from "@/hooks/useAuthStore";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@wordigo/ui";

import RootLayout from "../Layout";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const authContext = useAuth();

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <AuthContext.Provider value={authContext}>
        <RootLayout>{children}</RootLayout>
      </AuthContext.Provider>
    </NextThemesProvider>
  );
};

export default AppProviders;
