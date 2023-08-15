import Router from "next/router";
import { setToken } from "@/store/auth/slice";
import { useAppDispatch } from "@/utils/hooks";
import { useSession } from "next-auth/react";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { Fragment, type PropsWithChildren, useEffect, useState } from "react";

import PageLoader from "../UI/PageLoader";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: true,
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const session = useSession();

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
    if (session.status === "authenticated") dispatch(setToken(session?.data?.user?.accessToken));
  }, [session?.data]);

  return <Fragment>{loading || session.status === "loading" ? <PageLoader /> : children}</Fragment>;
}
