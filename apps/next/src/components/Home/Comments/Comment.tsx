import Image from "next/image";
import Animation from "@/components/Animation";

import CommentConstant, { type IComment } from "./comments.constant";

const Comment = () => {
  return (
    <Animation>
      <div className="w-full flex flex-wrap gap-3">
        {CommentConstant.map((item) => (
          <Comment.Item {...item} key={item.title} />
        ))}
      </div>
    </Animation>
  );
};

Comment.Item = ({ description, name, src, title }: IComment) => {
  return (
    <Animation>
      <div className="max-w-[420px] h-fit px-8 py-5 rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black">
        <span className={"flex flex-col gap-3"}>
          <span className="flex items-center gap-2">
            {src ? (
              <Image className="border-2 border-gray-600 rounded-full m-1" alt="" src={src} width={48} height={48}></Image>
            ) : (
              <div className=" rounded-full border-2 border-gray-600">
                <div className="bg-sky-500 w-[48px] h-[48px] rounded-full border-2 border-[#141420]"></div>
              </div>
            )}
            <span className={"flex items-center gap-2 text-sm py-1"}>
              <h1 className="font-semibold">{name}</h1>
              <p className="opacity-60">
                <span className="mr-1">{"―"}</span> {title}
              </p>
            </span>
          </span>

          <span>{description}</span>
        </span>
      </div>
    </Animation>
  );
};

export default Comment;
