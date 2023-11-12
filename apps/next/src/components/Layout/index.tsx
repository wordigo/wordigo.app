import { setToken } from "@/store/auth/slice";
import { setAcceptLanguage, setAuthToken } from "@/store/baseQuery";
import { setLanguage } from "@/store/common/slice";
import { useAppDispatch } from "@/utils/hooks";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PageLoader from "../UI/PageLoader";
import { useEffect, useState, type PropsWithChildren } from "react";

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
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>();
  const { i18n } = useTranslation();

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
    dispatch(setLanguage(i18n.language));
    setAcceptLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    if (session.status === "authenticated") {
      dispatch(setToken(session?.data?.user?.accessToken));

      // This code set axios instance token here waiting for that reason promise used.
      void Promise.resolve(setAuthToken(session?.data?.user?.accessToken)).then(
        () => setMounted(true)
      );
    } else {
      if (session.status === "loading") return;
      setMounted(true);
    }
  }, [session?.status]);

  const renderinCond = loading || session.status === "loading" || !mounted;

  const hasDashboard = router.asPath.includes("/dashboard");

  if (renderinCond && hasDashboard) {
    return <PageLoader />;
  }

  return <PageLoader />;
}
