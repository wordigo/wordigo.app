import AppProviders from "@/components/providers";
import { api } from "@/libs/trpc";
import { type Session, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import HomeHeader from "@/components/home/Header";

import "@wordigo/ui/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <AppProviders>
        <HomeHeader />
        <Component {...pageProps} />
      </AppProviders>
    </SessionContextProvider>
  );
};

export default api.withTRPC(appWithTranslation(App));
