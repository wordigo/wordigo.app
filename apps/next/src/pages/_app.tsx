import { Fragment } from "react";
import type { AppProps } from "next/app";
import { api } from "@/libs/trpc";
import { type Session } from "@supabase/auth-helpers-nextjs";

import { Toaster } from "@acme/ui";

import "@acme/ui/styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session | null }>) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Toaster />
    </Fragment>
  );
}

export default api.withTRPC(MyApp);
