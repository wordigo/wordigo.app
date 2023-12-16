import MainLayout from "@/components/Layout/MainLayout";
import { getPostBySlug } from "@/utils/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";
import nextI18nextConfig from "~/next-i18next.config";

export const getStaticProps = async ({ locale }) => {
  const { mdxSource } = await getPostBySlug("privacy-policy", locale);

  return {
    props: {
      source: mdxSource,
      info: mdxSource.scope,
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
};

const PrivacyPolicy = ({ source }) => {
  return (
    <MainLayout showBanner={false}>
      <section className="px-10 py-8 flex flex-col mx-10 max-lg:px-9 max-md:px-0 max-lg:py-12 max-md:mx-4 max-md:py-8">
        <article className="prose dark:prose-dark min-w-full">
          <MDXRemote {...source} />
        </article>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
