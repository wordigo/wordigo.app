import BlogCard from "@/components/Blog/Card/Card";
import MainLayout from "@/components/Layout/MainLayout";
import { getAllPosts } from "@/utils/blog";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

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

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const posts = await getAllPosts(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
      posts,
    },
  };
};

const Blogs = ({ posts }: any) => {
  const { t } = useTranslation();

  console.log(posts);

  return (
    <MainLayout>
      <section className="text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {t("blogs.title")}
        </h1>
        <p className="sm:text-lg md:text-xl mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 text-muted-foreground">
          {t("blogs.description")}
        </p>
      </section>

      <section className="gap-4 grid grid-cols-6">
        {posts.map((blog) => {
          return (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <BlogCard {...blog} />
            </Link>
          );
        })}
      </section>
    </MainLayout>
  );
};

export default Blogs;
