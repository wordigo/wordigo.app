import Link from "next/link";
import { type PropsWithChildren } from "react";

// const DynamicLogo = dynamic(() => import("@/components/Logo/DynamicLogo"), {
//   ssr: false,
// }) as FunctionComponent;

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <div className="grid gap-0 md:h-screen md:grid-cols-2">
        <div className="flex items-center justify-center bg-[#f2f2f7]">
          <div className="mx-auto max-w-md px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mb-5 flex h-14 w-14 flex-col items-center justify-center bg-white md:mb-6 lg:mb-8">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <p className="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.
            </p>
            <p className="text-sm font-bold sm:text-base">John Robert</p>
            <p className="text-sm sm:text-sm">Senior Webflow Developer</p>
          </div>
        </div>
        <div className="flex items-center justify-center relative flex-col px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="max-w-lg px-4 w-full">{children}</div>
          <div className="absolute bottom-5 flex gap-x-1 text-center text-sm">
            <Link href="/about">About</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/post/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

AuthLayout.Title = ({ children }: PropsWithChildren) => (
  <h2 className="mb-2 text-3xl font-bold">{children}</h2>
);

AuthLayout.Description = ({ children }: PropsWithChildren) => (
  <h1 className="text-sm text-muted-foreground mt-1">{children}</h1>
);

AuthLayout.Contet = ({ children }: PropsWithChildren) => (
  <div className="mx-auto pb-4 text-center">{children}</div>
);

AuthLayout.Footer = ({ url, children }: PropsWithChildren<{ url: string }>) => (
  <p className="px-8 text-sm text-muted-foreground text-center">
    <Link href={url} className="hover:text-brand">
      {children}
    </Link>
  </p>
);

export default AuthLayout;
