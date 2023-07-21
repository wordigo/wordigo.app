import React from "react";
import { type GetStaticPaths } from "next";
import Footer from "@/components/Home/Footers";
import MainLayout from "@/components/Layout/MainLayout";
import { CopyIcon, Link, Volume2 } from "lucide-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <main className="max-w-screen-7xl m-auto w-full my-10">
        <section className="flex items-center gap-1 w-full max-w-screen-7xl justify-between">
          <span className="flex items-center gap-2">
            <div className="w-[35px] h-[35px] bg-black rounded-full border-2"></div>
            <div>Yusuf</div>
          </span>

          <span>
            <Link />
          </span>
        </section>

        <section className="w-full flex flex-col my-6 items-center m-auto justify-center">
          <span>
            <h1 className="font-bold text-2xl text-light_text dark:text-white">Test Title</h1>
            <p className="text-light_text dark:text-white font-semibold text-sm opacity-80 my-1">TEST</p>
            <div className="my-3 flex flex-col gap-3">
              <div className="bg-gray-400 px-6 py-3 rounded-md flex items-center gap-5 w-fit min-w-[480px]">
                <span>
                  <Volume2 />
                </span>
                <div className="w-1 bg-white h-10 rounded-full"></div>
                <h1 className="text-xl min-w-[280px]">TEST</h1>
                <div className="w-1 bg-white h-10 rounded-full"></div>
                <h1 className="text-xl min-w-[280px]">TEST</h1>
                <div className="w-1 bg-white h-10 rounded-full"></div>
                <span>
                  <CopyIcon />
                </span>
              </div>
            </div>
          </span>
        </section>
      </main>
      <Footer />
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
