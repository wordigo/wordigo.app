import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import store from "@/store";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";

import "../styles/globals.css";
import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ session: any; _nextI18Next: { initialLocale: string } }>) => {
  return (
    <Fragment>
      <DefaultSeo {...seo[pageProps?._nextI18Next?.initialLocale]} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <AppProviders>
            <Component {...pageProps} />
          </AppProviders>
        </Provider>
      </SessionProvider>
      <Analytics />
    </Fragment>
  );
};

export default api.withTRPC(appWithTranslation(App));
