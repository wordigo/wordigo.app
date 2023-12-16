import MainLayout from "@/components/Layout/MainLayout";
import { getPostBySlug, postFilePathsByLocale, type IBlog } from "@/utils/blog";
import { Button } from "@wordigo/ui";
import { t } from "i18next";
import { XIcon } from "lucide-react";
import { type GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";

export default function BlogDetailPage({
  source,
  info?,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isBlogSaved, setIsBlogSaved] = useState(true);

  const host =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const url = `${host}/blogs/${info??.slug}`;

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      toast.success(t("notifications.copied_link_title"), {
        description: t("notifications.copied_link"),
        duration: 3000,
      });
      void navigator.clipboard.writeText(url);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center p-0 pt-0 mt-2 px-0">
        <div className="w-full md:max-w-4xl  flex gap-2 md:gap-6 flex-col">
          <div className="flex justify-between w-full mt-2 md:mt-5">
            <div className=" w-full flex flex-col gap-2 md:gap-6">
              <div className="flex w-full gap-2 md:gap-0 items-center justify-between">
                <div className="text-xl md:text-3xl">{info?.title}</div>{" "}
                <div className=" py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center whitespace-nowrap">
                  {info?.date} · 12 min read
                </div>{" "}
              </div>

              <div className="bg-gray-600 w-full h-52 rounded-lg overflow-hidden relative">
                <Image
                  src={`/images/blogs/${info?.thumbnail}`}
                  fill
                  alt={info?.title}
                />
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
                    <div className="font-normal py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs  border justify-center">
                      Frontend Dev.
                    </div>
                  </div>
                </div>
                <div className=" flex  items-center gap-7 md:w-fit w-full md:justify-normal justify-between">
                  <div className="flex items-center gap-2">
                    <div className="dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  font-medium border text-sm gap-2 justify-center cursor-pointer dark:bg-DarkBackground whitespace-nowrap hover:bg-slate-200 ">
                      <XIcon className="w-4 dark:fill-white fill-black" />
                      Tweet
                    </div>
                    <Button
                      variant="outline"
                      className="text-xs px-4 w-20"
                      onClick={copyToClipboard}
                    >
                      <MdContentCopy className="w-4 dark:fill-white fill-black" />
                      Copy Link
                    </Button>
                    {/* dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  dark:bg-DarkBackground font-medium border text-sm gap-2 justify-center cursor-pointer whitespace-nowrap hover:bg-slate-200 */}
                  </div>
                  <div>
                    {isBlogSaved ? (
                      <FaBookmark
                        onClick={() => setIsBlogSaved(!isBlogSaved)}
                        className="w-6 fill-black dark:fill-white cursor-pointer"
                      />
                    ) : (
                      <FaRegBookmark
                        onClick={() => setIsBlogSaved(!isBlogSaved)}
                        className="w-6 fill-black dark:fill-white cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article className="prose dark:prose-dark min-w-full border-t-[1px] border-gray-300 pt-4">
            <MDXRemote {...source} />
          </article>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = (() => {
  let paths = [];

  ["en", "tr"].forEach((lang) => {
    const posts = postFilePathsByLocale(lang);
    paths = [
      ...paths,
      ...posts.map((filePath) => ({
        params: {
          locale: lang,
          slug: filePath
            .replace(/^.*[\\\/]/, "")
            .split(".")
            .slice(0, -1)
            .join("."),
        },
      })),
    ];
  });

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const { mdxSource } = await getPostBySlug(slug, locale);

  return {
    props: {
      source: mdxSource,
      info?: mdxSource.scope as unknown as IBlog,
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
};
