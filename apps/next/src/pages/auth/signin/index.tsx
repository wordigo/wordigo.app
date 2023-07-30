import { type GetServerSidePropsContext } from "next";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

import AuthSıgnInForm from "./signin-form";

const SıgnIn = ({ _nextI18Next }: PageProps) => {
  return (
    <AuthLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common?.seo_signin_title} />
      <AuthLayout.Title>Welcome Back</AuthLayout.Title>
      <AuthLayout.Description>Enter your email to sign in to your account.</AuthLayout.Description>
      <AuthSıgnInForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signup">
        Don’t have an account? <span className="text-foreground font-semibold">Sign up</span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session, ...(await serverSideTranslations(context.locale, ["common"])) },
  };
}

export default SıgnIn;
