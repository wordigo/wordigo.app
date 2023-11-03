import AuthSignInForm from "./signin-form";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { useToast } from "@wordigo/ui";
import { type GetServerSidePropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { type PageProps } from "types/global";

const signIn = ({ _nextI18Next }: PageProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const { query, replace } = useRouter();

  useEffect(() => {
    if (query?.error) {
      toast({
        variant: "destructive",
        title: t("notifications.warning"),
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
      <AuthSignInForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signup">
        {t("signin.info")}{" "}
        <span className="text-foreground font-semibold">
          {t("signin.info_link")}
        </span>
      </AuthLayout.Footer>
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

export default signIn;
