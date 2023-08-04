import { type GetServerSidePropsContext } from "next";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common.seo.signup_title} />
      <AuthLayout.Title>{t("signup.title")}</AuthLayout.Title>
      <AuthLayout.Description>{t("signup.description")}</AuthLayout.Description>
      <AuthSıgnupForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signin">
        {t("signup.info")} <span className="text-foreground font-semibold">{t("signup.info_link")}</span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SignUp;
