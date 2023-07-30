import { type GetServerSidePropsContext } from "next";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

import AuthSıgnupForm from "./signup-form";

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

const SignUp = ({ _nextI18Next }: PageProps) => {
  return (
    <AuthLayout>
      <NextSeo title={_nextI18Next.initialI18nStore[_nextI18Next.initialLocale].common.seo_signup_title} />
      <AuthLayout.Title>Welcome</AuthLayout.Title>
      <AuthLayout.Description>Enter your email and username below to create your account.</AuthLayout.Description>
      <AuthSıgnupForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signin">
        Already have an account? <span className="text-foreground font-semibold">Sign in</span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SignUp;
