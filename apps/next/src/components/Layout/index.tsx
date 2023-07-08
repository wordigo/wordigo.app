import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { type PropsWithChildren, useEffect } from "react";
import supabase from "@/libs/supabase";

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
  const getUser = async () => {
    const session = await supabase.auth.getSession();
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>{children}</div>;
}
