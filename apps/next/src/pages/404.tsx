import Link from "next/link";
import { useRouter } from "next/router";
import DynamicLogo from "@/components/Logo/DynamicLogo";
import { ArrowLeftIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Button } from "@wordigo/ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Error404Page = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleToNavigate = () => {
    void router.replace("/");
  };

  return (
    <div className="max-w-[50rem] flex flex-col mx-auto w-full h-screen">
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
          <Link href="/">
            <DynamicLogo />
          </Link>
        </nav>
      </header>
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
        <h1 className="block text-2xl font-bold text-white"></h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">{t("error_404.title")}</p>
        <p className="text-gray-600 dark:text-gray-400">{t("error_404.description")}</p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Button onClick={handleToNavigate} variant="default" size="lg">
            <ArrowLeftIcon />
            {t("error_404.action")}
          </Button>
        </div>
      </div>

      <footer className="mt-auto text-center py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Error404Page;
