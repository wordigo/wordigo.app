import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import store from "@/store";
import "@wordigo/ui/styles/globals.css";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation, useTranslation } from "next-i18next";
import PlausibleProvider from "next-plausible";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";
import nextI18nextConfig from "~/next-i18next.config";
import "../styles/globals.css";
import "../styles/styles.css";

const App = ({
  Component,
  pageProps,
}: AppProps<{ session: Session; _nextI18Next: { initialLocale: string } }>) => {
  const router = useRouter();
  const { t } = useTranslation();
  z.setErrorMap(makeZodI18nMap({ t, ns: nextI18nextConfig.ns }));

  return (
    <PlausibleProvider domain="wordigo.app">
      <DefaultSeo {...seo[pageProps?._nextI18Next?.initialLocale]} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={pageProps.session} refetchOnWindowFocus={true}>
        <Provider store={store}>
          <AppProviders>
            <Component {...pageProps} key={router.asPath} />
          </AppProviders>
        </Provider>
      </SessionProvider>
    </PlausibleProvider>
  );
};

export default appWithTranslation(App, {
  ...nextI18nextConfig,
  ...(process.env.NODE_ENV == "development" && { reloadOnPrerender: true }),
});
