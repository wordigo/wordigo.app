import BlogCard from "@/components/Blog/Card/Card";
import Footer from "@/components/Home/Footers";
import Newsletter from "@/components/Home/Newsletter";
import MainLayout from "@/components/Layout/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dummyData = [
  {
    id: 1,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    thumbnail: null,
    profilePicture: null,
    date: "Aug 15, 2021",
  },
  {
    id: 2,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    thumbnail: null,
    profilePicture: null,
    date: "Aug 15, 2021",
  },
  {
    id: 3,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.Fixed the size of the info section in the blog cardFixed the size of the info section in the blog card",
    blogType: "Article",
    userName: "Jese Leos",
    thumbnail: null,
    profilePicture: null,
    date: "Aug 15, 2021",
  },
  {
    id: 4,
    title: "Our first office",
    readTime: "16 min",
    info: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    blogType: "Article",
    userName: "Jese Leos",
    thumbnail: null,
    profilePicture: null,
    date: "Aug 15, 2021",
  },
];

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center gap-y-6 md:gap-y-14">
        <div className="flex flex-col items-center max-md:px-4 text-center md:mt-20">
          <h2 className="text-4xl font-semibold mt-3 max-lg:text-2xl">
            {t("blogs.title")}
          </h2>
          <p className="text-xl mt-4 text-muted-foreground max-lg:text-lg max-lg:mt-2 md:max-w-2xl">
            {t("blogs.description")}
          </p>
        </div>
        <div className="gap-4 grid grid-cols-6 max-w-7xl">
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
      <Newsletter />
      <Footer />
    </MainLayout>
  );
};

export default Blogs;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "zod"])) },
  };
}
