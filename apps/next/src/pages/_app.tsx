import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { type Session, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <Fragment>
      <DefaultSeo {...seo} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <AppProviders>
          <Component {...pageProps} />
        </AppProviders>
      </SessionContextProvider>
      <Analytics />
    </Fragment>
  );
};

export default api.withTRPC(appWithTranslation(App));
