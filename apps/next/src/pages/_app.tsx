import GoogleAnalytics from "@/components/GoogleAnalytics";
import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import store from "@/store";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation, useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";
import "@wordigo/ui/styles/globals.css";
import "../styles/globals.css";

const App = ({
  Component,
  pageProps,
}: AppProps<{ session: Session; _nextI18Next: { initialLocale: string } }>) => {
  const { t } = useTranslation();
  z.setErrorMap(makeZodI18nMap({ t, ns: ["common", "zod"] }));

  return (
    <Fragment>
      <GoogleAnalytics />
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
    </Fragment>
  );
};

export default appWithTranslation(App);
