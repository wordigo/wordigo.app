import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import ResetEmailForm from "@/components/Auth/Reset/email";
import ResetPasswordForm from "@/components/Auth/Reset/password";
import AuthSignInForm from "@/components/Auth/SignIn/form";
import SocialProviders from "@/components/Auth/SocialProviders";
import { type GetServerSidePropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { type PageProps } from "types/global";

const reset = ({ _nextI18Next }: PageProps) => {
  const { t } = useTranslation();
  const [resetStep, setResetStep] = useState<"email" | "password">("email");

  const { query, replace } = useRouter();

  useEffect(() => {
    if (query?.error) {
      toast.error(t("notifications.warning"), {
        description: query?.error,
      });
      void replace("/auth/signin", undefined, { shallow: true });
    }
  }, [query?.error]);

  return (
    <AuthLayout>
      <NextSeo
        title={
          _nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common
            ?.seo.signin_title
        }
      />
      <AuthLayout.Title>{t("signin.title")}</AuthLayout.Title>
      <AuthLayout.Description>{t("signin.description")}</AuthLayout.Description>
      {resetStep === "email" ? (
        <ResetEmailForm setResetStep={setResetStep} />
      ) : (
        <ResetPasswordForm setResetStep={setResetStep} />
      )}
    </AuthLayout>
  );
};

export async function getStaticProps(context: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "zod"])),
    },
  };
}

export default reset;
