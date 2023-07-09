import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { type Session, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <AppProviders>
      <DefaultSeo {...seo} />
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
      <Analytics />
    </AppProviders>
  );
};

export default api.withTRPC(appWithTranslation(App));
