import type { AppProps } from "next/app";
import { api } from "@/libs/trpc";
import { type Session } from "@supabase/auth-helpers-nextjs";

import "@acme/ui/styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session | null }>) {
  return <Component {...pageProps} />;
}

export default api.withTRPC(MyApp);
