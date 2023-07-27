import { type PropsWithChildren } from "react";
import { AuthContext, useAuth } from "@/hooks/useAuthStore";
import { store } from "@/stores/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";

import { Toaster } from "@wordigo/ui";

import RootLayout from "../Layout";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const authContext = useAuth();

  return (
    <Provider store={store}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        <AuthContext.Provider value={authContext}>
          <RootLayout>{children}</RootLayout>
        </AuthContext.Provider>
      </NextThemesProvider>
    </Provider>
  );
};

export default AppProviders;
