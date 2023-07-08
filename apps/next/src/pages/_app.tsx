import AppProviders from "@/components/providers";
import seo from "@/constants/seo";
import { api } from "@/libs/trpc";
import { type Session } from "@supabase/auth-helpers-nextjs";
import { Analytics } from "@vercel/analytics/react";

import "@wordigo/ui/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps<{ initialSession: Session | null }>) => {
  return (
    <AppProviders>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <Analytics />
    </AppProviders>
  );
};

export default api.withTRPC(appWithTranslation(App));
