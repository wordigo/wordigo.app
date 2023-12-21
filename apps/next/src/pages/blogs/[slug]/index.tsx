import MainLayout from "@/components/Layout/MainLayout";
import { POSTS_PATH, getPostBySlug, type IBlog } from "@/utils/blog";
import { Button } from "@wordigo/ui";
import fs from "fs";
import { t } from "i18next";
import { XIcon } from "lucide-react";
import { type GetStaticPaths, type InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";
import nextI18nextConfig from "~/next-i18next.config";

export default function BlogDetailPage({
  source,
  info,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const host =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const url = `${host}/blogs/${info?.slug}`;

  console.log(source);

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      toast.success(t("notifications.copied_link_title"), {
        description: t("notifications.copied_link"),
        duration: 3000,
      });
      void navigator.clipboard.writeText(url);
    }
  };

  const components = {
    h1: (props) => (
      <p {...props} className="font-bold">
        {""}
      </p>
    ),
    p: (props) => (
      <p {...props} className="blogStle">
        {props.children}
      </p>
    ),
  };

  return (
    <MainLayout>
      <div className="flex justify-center p-0 pt-0 mt-2 px-0">
        <div className="w-full md:max-w-4xl  flex gap-2 md:gap-6 flex-col">
          <div className="flex justify-between w-full mt-2 md:mt-5">
            <div className=" w-full flex flex-col gap-2 md:gap-6">
              <div className="flex w-full gap-2 md:gap-0 items-center justify-between">
                <h1 className="text-xl md:text-3xl font-bold">{info?.title}</h1>{" "}
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                <div className="flex items-center gap-3 pt-2 w-full">
                  <Image
                    src={info?.avatar}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-lg font-normal">{info?.author}</div>
                    <div className=" py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center whitespace-nowrap">
                      {info?.date} · 12 min read
                    </div>
                  </div>
                </div>
                <div className=" flex  items-center gap-7 md:w-fit w-full md:justify-normal justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="transition-all py-1 w-fit flex items-center px-2 font-medium border text-sm gap-2 justify-center cursor-pointerwhitespace-nowrap dark:bg-transparent"
                    >
                      <XIcon className="w-4 dark:fill-white fill-black" />
                      Tweet
                    </Button>
                    <Button
                      variant="outline"
                      className="text-xs min-w-fit dark:bg-transparent"
                      onClick={copyToClipboard}
                    >
                      <MdContentCopy className="w-4 dark:fill-white fill-black" />
                      <p className="w-20"> Copy Link</p>
                    </Button>
                    {/* dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  dark:bg-DarkBackground font-medium border text-sm gap-2 justify-center cursor-pointer whitespace-nowrap hover:bg-slate-200 */}
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 w-full h-52 rounded-lg overflow-hidden relative">
                <Image
                  src={`/images/blogs/${info?.thumbnail}`}
                  fill
                  alt={info?.title}
                />
              </div>
            </div>
          </div>
          <article className="prose dark:prose-dark min-w-full pt-4 break-words dark:text-white">
            <MDXRemote {...source} components={{ ...components }} />
          </article>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = (() => {
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
}) satisfies GetStaticPaths;

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const { mdxSource } = await getPostBySlug(slug, locale);

  return {
    props: {
      source: mdxSource,
      info: mdxSource.scope as unknown as IBlog,
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
};
