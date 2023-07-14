import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="max-w-screen-8xl w-full m-auto">
        <div className="text-xl opacity-50 font-bold tracking-tight self-end pl-10 py-4">{t("nav_translate")}</div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
