import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Blog() {
  return (
    <MainLayout>
      Blog page
      <div className="px-2 rounded-xl text-[#101828]">
        <div className="flex flex-col gap-2 p-3 bg-white border rounded">
          <div className="pt-2 pb-2">
            <div className="bg-red-500 h-[290px] rounded-lg"></div>
          </div>
          <span className="py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center">
            Article
          </span>
          <div className="font-bold text-xl">Our First Office</div>
          <div className="text-gray-700">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-red-500 w-[40px] h-[40px] rounded-full"></div>
            <div>
              <div>Jesse Leos</div>
              <div className="text-sm">Aug 15, 2021 · 16 min read</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "zod"])) },
  };
}
