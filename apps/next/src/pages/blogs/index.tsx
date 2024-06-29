import BlogCard from "@/components/Company/Blog/Card/Card";
import MainLayout from "@/components/Layout/MainLayout";
import { postivaClient } from "@/libs/postiva";
import { type APIResponse, type Content } from "@postiva/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import nextI18nextConfig from "~/next-i18next.config";

export interface IBlogs {
  posts: APIResponse<Content[]>;
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

      <section className="gap-6 grid lg:grid-cols-2">
        {posts?.data?.map((blog) => {
          return (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog.slug}
              className="col-span-1"
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
  const posts = await postivaClient.contents.getContents();

  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
      posts,
    },
  };
};

export default Blogs;
