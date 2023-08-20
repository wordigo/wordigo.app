import { CToaster } from "./toaster";
import * as Portal from "@radix-ui/react-portal";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { localStorage } from "~utils/storage";

const Provider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>();
  const [mounted, setMounted] = useState(false);
  const portalContainer = document.getElementById("el-translate-container") || document.body;
  const [queryClient] = useState(() => new QueryClient());

  localStorage.watch({
    theme: (state) => {
      setTheme(state.newValue);
    },
  });

  const getStorages = async () => {
    const themeStorage = await localStorage.get("theme");
    setTheme(themeStorage);
    setMounted(true);
  };

  useEffect(() => {
    void getStorages();
  }, []);

  if (mounted)
    return (
      <Portal.Root data-theme={theme || "light"} container={portalContainer}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <CToaster />
      </Portal.Root>
    );
};

export default Provider;
