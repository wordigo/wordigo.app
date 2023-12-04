import Footer from "@/components/Home/Footers";
import MainLayout from "@/components/Layout/MainLayout";
import { POSTS_PATH, getPostBySlug } from "@/utils/blog";
import fs from "fs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";
import path from "path";

export const getStaticProps = async ({ params, locale }) => {
  const { mdxSource } = await getPostBySlug(params.slug, locale);

  return {
    props: {
      source: mdxSource,
      info: mdxSource.scope,
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
};

export const getStaticPaths = async () => {
  const locales = ["en", "tr"];
  const paths = [];

  for (const locale of locales) {
    const postPaths = fs
      .readdirSync(path.join(POSTS_PATH, locale))
      .filter((path) => /\.mdx?$/.test(path))
      .map((path) => path.replace(/\.mdx?$/, ""))
      .map((slug) => ({ params: { slug }, locale }));

    paths.push(...postPaths);
  }

  return {
    paths,
    fallback: false,
  };
};

const Post = ({ source }) => {
  return (
    <MainLayout showBanner={false}>
      <section className="px-10 py-8 flex flex-col mx-10 max-lg:px-9 max-md:px-0 max-lg:py-12 max-md:mx-4 max-md:py-8">
        <article className="prose dark:prose-dark min-w-full">
          <MDXRemote {...source} />
        </article>
      </section>
      <Footer />
    </MainLayout>
  );
};

export default Post;
