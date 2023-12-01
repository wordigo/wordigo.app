import ForgotEmailForm from "@/components/Auth/Forgot/email";
import ForgotPasswordForm from "@/components/Auth/Forgot/password";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { type GetServerSidePropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { type PageProps } from "types/global";

const Forgot = ({ _nextI18Next }: PageProps) => {
  const { t } = useTranslation();
  const [ForgotStep, setForgotStep] = useState<"email" | "password">("email");

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
      {ForgotStep === "email" ? (
        <ForgotEmailForm setForgotStep={setForgotStep} />
      ) : (
        <ForgotPasswordForm setForgotStep={setForgotStep} />
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

export default Forgot;
