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
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
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
      Blog page
      <div className="px-4 flex gap-2 flex-col ">
        {dummyData.map((blog) => {
          return <BlogCard {...blog} />;
        })}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "zod"])) },
  };
}
