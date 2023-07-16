import Animation from "@/components/Animation";

import Comment from "./Comment";

export default function Comments() {
  return (
    <Animation>
      <div className="container mx-auto max-w-screen-8xl w-full my-10">
        <h1 className="w-full text-center font-semibold text-[24px]">Loved by people</h1>
        <div className="flex gap-6 items-center justify-center flex-wrap my-10">
          <Comment />
        </div>
      </div>
    </Animation>
  );
}
