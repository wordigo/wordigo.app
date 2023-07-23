import Image from "next/image";
import { Star } from "lucide-react";

import CommentConstant, { type IComment } from "./comments.constant";

const Comment = () => {
  return CommentConstant.map((item) => <Comment.Item {...item} key={item.title} />);
};

Comment.Item = ({ description, name, image, title, userDescription }: IComment) => {
  return (
    <div className="border p-12 rounded-2xl w-full flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="grid grid-flow-col gap-x-1 w-fit">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star className="h-5 w-5" fill="currentColor" key={index} />
          ))}
        </div>
        <span className="text-2xl font-semibold mt-4">{title}</span>
        <span className="text-base mt-4 text-muted-foreground">{description}</span>
      </div>
      <div className="mt-6 flex items-center">
        <div className="min-w-[3.5rem] min-h-[3.5rem] relative mr-4">
          <Image className="rounded-full" fill alt={name} src={image}></Image>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-sm text-muted-foreground">{userDescription}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
