import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import store from "@/store";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation, useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";

import "../styles/globals.css";
import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ session: any; _nextI18Next: { initialLocale: string } }>) => {
  const { t } = useTranslation();
  z.setErrorMap(makeZodI18nMap({ t, ns: ["common", "zod"] }));

  return (
    <Fragment>
      <DefaultSeo {...seo[pageProps?._nextI18Next?.initialLocale]} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={pageProps.session} refetchOnWindowFocus={true}>
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

export default appWithTranslation(App);
