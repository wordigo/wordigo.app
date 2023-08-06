import { type GetServerSidePropsContext } from "next";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

import AuthSıgnInForm from "./signin-form";

const SıgnIn = ({ _nextI18Next }: PageProps) => {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common?.seo.signin_title} />
      <AuthLayout.Title>{t("signin.title")}</AuthLayout.Title>
      <AuthLayout.Description>{t("signin.description")}</AuthLayout.Description>
      <AuthSıgnInForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signup">
        {t("signin.info")} <span className="text-foreground font-semibold">{t("signin.info_link")}</span>
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
    props: { session, ...(await serverSideTranslations(context.locale, ["common", "zod"])) },
  };
}

export default SıgnIn;
