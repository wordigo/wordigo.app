import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { Fragment, type PropsWithChildren, useEffect, useState } from "react";
import { setToken } from "@/store/auth/slice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { useSession } from "next-auth/react";

import PageLoader from "../UI/PageLoader";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const token = useAppSelector((state) => state.auth.token);

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
    if (session?.user) dispatch(setToken(session?.user?.accessToken));
  }, [session?.user]);

  return <Fragment>{loading || !token ? <PageLoader /> : children}</Fragment>;
}
