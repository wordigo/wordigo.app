/* eslint-disable @typescript-eslint/require-await */
import Footer from "@/components/Home/Footers";
import MainLayout from "@/components/Layout/MainLayout";
import { getPostBySlug, postFilePaths } from "@/utils/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";

export const getStaticProps = async ({ params, locale }) => {
  const { mdxSource } = await getPostBySlug(params.slug);

  return {
    props: {
      source: mdxSource,
      info: mdxSource.scope,
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

const Post = ({ source, info }) => {
  return (
    <MainLayout>
      <section className="px-20 py-24 flex flex-col items-center max-lg:px-9 max-md:px-0 max-lg:py-12 max-md:mx-4 max-md:py-8">
        <h2 className="text-4xl font-semibold max-lg:text-2xl">
          {info.title}
          {/* {t("faq.heading")} */}
        </h2>
        <p className="text-xl text-muted-foreground mt-5 max-lg:text-base max-lg:mt-4">
          {info.description}
          {/* {t("faq.description")} */}
        </p>
        <article className="prose dark:prose-dark">
          <MDXRemote {...source} />
        </article>
      </section>
      <Footer />
    </MainLayout>
  );
};

export default Post;
