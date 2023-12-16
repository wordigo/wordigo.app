import MainLayout from "@/components/Layout/MainLayout";
import { getPostBySlug, postFilePaths } from "@/utils/blog";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

export default function BlogContent({ post }) {
  if (!post) return;
  const [isBlogSaved, setIsBlogSaved] = useState(true);
  const { data: blogData } = post;
  const dummyData = [
    { id: 1, text: "Blogs", link: "blogs" },
    { id: 2, text: "Lorem ipsum", link: "#" },
  ];
  console.log(blogData);

  return (
    <MainLayout>
      <div className="flex justify-center p-0 pt-0 mt-2 px-0">
        <div className="w-full md:max-w-4xl  flex gap-2 md:gap-6 flex-col">
          {/* <Breadcrumb data={dummyData} /> */}
          <div className="flex justify-between w-full mt-2 md:mt-5">
            <div className=" w-full flex flex-col gap-2 md:gap-6">
              <div className="flex w-full gap-2 md:gap-0 items-center justify-between">
                <div className="text-xl md:text-3xl">{blogData.title}</div>{" "}
                <div className=" py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center whitespace-nowrap">
                  {blogData.date} · 12 min read
                </div>{" "}
              </div>
              <div className="bg-gray-600 w-full h-52 rounded-lg overflow-hidden"></div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                <div className="flex items-center gap-3 pt-2 w-full">
                  <Image
                    src={blogData.avatar}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                    // className="bg-black w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-lg font-normal">{blogData.author}</div>
                    <div className="font-normal py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs  border justify-center">
                      Frontend Dev.
                    </div>
                  </div>
                </div>
                <div className=" flex  items-center gap-7 md:w-fit w-full md:justify-normal justify-between">
                  <div className="flex items-center gap-2">
                    <div className=" dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  font-medium border text-sm gap-2 justify-center cursor-pointer dark:bg-DarkBackground whitespace-nowrap hover:bg-slate-200 ">
                      <XIcon className="w-4 dark:fill-white fill-black" />
                      Tweet
                    </div>
                    <div className=" dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  dark:bg-DarkBackground font-medium border text-sm gap-2 justify-center cursor-pointer whitespace-nowrap hover:bg-slate-200">
                      <MdContentCopy className="w-4 dark:fill-white fill-black" />
                      Copy Link
                    </div>
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
          <p className="leading-[200%] border-t-[1px] border-gray-300 pt-4">
            &nbsp;{blogData.content}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = () => {
  console.log(postFilePaths);

  return {
    paths: postFilePaths.map((path) => {
      params: {
        slug: path;
      }
    }),
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug, "en");
  console.log("POST POST POST: ", post);

  return {
    props: {
      post,
    },
  };
};
