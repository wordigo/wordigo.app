import BlogCard from "@/components/Blog/Card/Card";
import MainLayout from "@/components/Layout/MainLayout";
import { getAllPosts, type IBlog } from "@/utils/blog";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export interface IBlogs {
  posts: IBlog[];
}

const Blogs: React.FC<IBlogs> = ({ posts }) => {
  const { t } = useTranslation();

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
              href={`/blogs/${blog.slug}`}
              key={blog.slug}
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

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const posts = getAllPosts(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
      posts,
    },
  };
};

export default Blogs;
