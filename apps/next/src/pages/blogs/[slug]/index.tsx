import MainLayout from "@/components/Layout/MainLayout";
import { POSTS_PATH, getPostBySlug, type IBlog } from "@/utils/blog";
import fs from "fs";
import { CopyIcon, Linkedin, Share2, XIcon } from "lucide-react";
import { type GetStaticPaths, type InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import path from "path";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import nextI18nextConfig from "~/next-i18next.config";

interface SocialMediaMenu {
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function BlogDetailPage({
  source,
  info,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { t } = useTranslation();
  const host =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const url = `${host}/blogs/${info?.slug}`;

  const components = {
    h1: (props) => (
      <p {...props} className="font-bold">
        {""}
      </p>
    ),
    p: (props) => (
      <p {...props} className="blogStyle">
        {props.children}
      </p>
    ),
  };

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      toast.success(t("notifications.copied_link_title"), {
        description: t("notifications.copied_link"),
        duration: 3000,
      });
      void navigator.clipboard.writeText(url);
    }
  };

  const SocialMediaMenuProps: SocialMediaMenu[] = [
    {
      className:
        "bg-red-400 px-2 py-1 rounded-full dark:bg-[#020817] dark:hover:bg-[#1E293B] bg-[#fff] hover:bg-[#F1F5F9]",
      icon: <XIcon className="w-4 dark:fill-white fill-black" />,
      onClick: () => console.log("test"),
    },
    {
      className:
        "bg-red-400 px-2 py-1 rounded-full dark:bg-[#020817] dark:hover:bg-[#1E293B] bg-[#fff] hover:bg-[#F1F5F9]",
      icon: <Linkedin className="w-4 dark:fill-white fill-black" />,
      onClick: () => console.log("test"),
    },
    {
      className:
        "bg-red-400 px-2 py-1 rounded-full dark:bg-[#020817] dark:hover:bg-[#1E293B] bg-[#fff] hover:bg-[#F1F5F9]",
      icon: <CopyIcon className="w-4 dark:fill-white fill-black" />,
      onClick: () => copyToClipboard(),
    },
  ];

  const handleSocialPopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <MainLayout>
      <div className="flex justify-center p-0 pt-0 mt-2 px-0">
        <div className="w-full md:max-w-4xl  flex gap-2 md:gap-6 flex-col">
          <div className="flex justify-between w-full mt-2 md:mt-5">
            <div className=" w-full flex flex-col gap-2 md:gap-6">
              <div className="flex w-full gap-2 md:gap-0 items-center justify-between">
                <h1 className="text-xl md:text-3xl font-bold">{info?.title}</h1>{" "}
                <div>
                  {info.tags?.split(",").map((tag) => (
                    <p
                      key={tag}
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
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
                <div className=" flex  items-center gap-7 md:w-fit md:justify-normal justify-between">
                  <div
                    onMouseEnter={() => setPopupVisible(true)}
                    onMouseLeave={() => setPopupVisible(false)}
                    className="flex items-center"
                  >
                    {isPopupVisible && (
                      <div className="flex gap-2 justify-center bg-transparent w-fit px-2 py-2">
                        {SocialMediaMenuProps.map((item) => (
                          <div
                            onClick={item.onClick}
                            className={item.className}
                          >
                            {item.icon}
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="py-1 px-2 rounded-full dark:bg-[#020817] dark:hover:bg-[#1E293B] bg-[#fff] hover:bg-[#F1F5F9]"
                      onClick={handleSocialPopup}
                    >
                      <Share2 className="w-4 dark:fill-white fill-black" />
                    </div>
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
