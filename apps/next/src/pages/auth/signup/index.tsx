import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import AuthSignUpForm from "@/components/Auth/SignUp/form";
import SocialProviders from "@/components/Auth/SocialProviders";
import { type GetServerSidePropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

export async function getStaticProps(context: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "zod"])),
    },
  };
}

const SignUp = ({ _nextI18Next }: PageProps) => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <NextSeo
        title={
          _nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common
            .seo.signup_title
        }
      />
      <AuthLayout.Title>{t("signup.title")}</AuthLayout.Title>
      <AuthLayout.Description className="md:max-w-[250px] mx-auto">
        {t("signup.description")}
      </AuthLayout.Description>
      <AuthSignUpForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signin">
        {t("signup.info")}{" "}
        <span className="text-foreground font-semibold">
          {t("signup.info_link")}
        </span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SignUp;
