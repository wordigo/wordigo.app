import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/globals.css";
import "../styles/styles.css";
import store from "@/store";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps<{ session: any }>) => {
  return (
    <Fragment>
      <DefaultSeo {...seo} />
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
