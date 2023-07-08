import AppProviders from "@/components/providers";
import { api } from "@/libs/trpc";
import { type Session } from "@supabase/auth-helpers-nextjs";

import "@wordigo/ui/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) => {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
};

export default api.withTRPC(appWithTranslation(App));
