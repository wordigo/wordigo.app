import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-8xl w-full m-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl opacity-80 font-bold tracking-tight px-10 pb-10">{t("nav_contact")}</h1>
        <span className="flex gap-6 items-center justify-center flex-wrap">
          <Link
            href={"mailto:noreply@wordigo.com"}
            className="max-w-[420px] h-fit px-9 py-6 rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black gap-1 flex flex-col"
          >
            <h1 className="font-bold">E-posta üzerinden iletişim</h1>
            <p className="max-w-[280px] break-words opacity-70">Sorunuz veya farklı konular için bize e-posta gönderebilirsiniz.</p>
            <div className="flex gap-3 items-center text-blue-500">
              E-posta gönderin <ArrowRight></ArrowRight>
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
}