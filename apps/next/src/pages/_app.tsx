import AppProviders from "@/components/providers";
import { api } from "@/libs/trpc";
import { type Session, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import "@wordigo/ui/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";

import "../styles/styles.css";

function App({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </SessionContextProvider>
  );
}

export default api.withTRPC(App);
