import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import { type PropsWithChildren } from "react";

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
  return <div>{children}</div>;
}
