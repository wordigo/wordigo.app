import BlogCard from "@/components/Blog/Card/Card";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dummyData = [
  {
    id: 1,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    date: "Aug 15, 2021",
  },
  {
    id: 2,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    date: "Aug 15, 2021",
  },
  {
    id: 3,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    date: "Aug 15, 2021",
  },
  {
    id: 4,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    date: "Aug 15, 2021",
  },
];

export default function Blog() {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="px-4 gap-4 grid grid-cols-6  w-[1200px]">
          <div className="text-3xl font-bold col-span-6 pt-7 flex justify-center mb-10">
            Wordigo Blog
          </div>
          {dummyData.map((blog) => {
            return (
              <div
                key={blog.id}
                className="col-span-6 md:col-span-3 lg:col-span-2"
              >
                <BlogCard {...blog} />
              </div>
            );
          })}
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
