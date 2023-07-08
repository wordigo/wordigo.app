import Router from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { type PropsWithChildren, useEffect } from "react";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function RootLayout({ children }: PropsWithChildren) {
  const supabase = useSupabaseClient();

  const getUser = async () => {
    const session = await supabase.auth.getSession();
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>{children}</div>;
}
