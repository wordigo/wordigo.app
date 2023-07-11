import Router from "next/router";
import { useAuthStore } from "@/hooks/useAuthStore";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { Fragment, type PropsWithChildren, useEffect, useState } from "react";

import PageLoader from "../UI/PageLoader";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export default function RootLayout({ children }: PropsWithChildren) {
  const authStore = useAuthStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      NProgress.start();
      setLoading(true);
    };
    const end = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  useEffect(() => {
    void authStore.getUserMe();
  }, []);

  return <Fragment>{loading ? <PageLoader /> : children}</Fragment>;
}
