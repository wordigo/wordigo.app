import { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import { api } from "@/libs/trpc";
import {
  type Session,
  createBrowserSupabaseClient,
} from "@supabase/auth-helpers-nextjs";

import { Toaster } from "@acme/ui";

import "@acme/ui/styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session | null }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <Fragment>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
        <Toaster />
      </SessionContextProvider>
    </Fragment>
  );
}

export default api.withTRPC(App);
