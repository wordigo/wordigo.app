import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { type Session, createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/globals.css";
import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ session: any }>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <Fragment>
      <DefaultSeo {...seo} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      {/* <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}> */}
      <SessionProvider session={pageProps.session}>
        <AppProviders>
          <Component {...pageProps} />
        </AppProviders>
      </SessionProvider>
      {/* </SessionContextProvider> */}
      <Analytics />
    </Fragment>
  );
};

export default api.withTRPC(appWithTranslation(App));
