import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-8xl w-full m-auto">
      <div className="flex flex-col items-center justify-center">
        <span className="flex gap-6 items-center justify-center flex-wrap flex-col">
          <h1 className="text-3xl font-bold tracking-tight py-2 opacity-80">{t("nav_about")}</h1>
          <p className="w-[680px] text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </span>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}