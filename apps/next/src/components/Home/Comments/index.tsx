import Animation from "@/components/Animation";

import Comment from "./Comment";

export default function Comments() {
  return (
    <Animation className="px-20 py-24 w-full flex flex-col items-center">
      <h2 className="text-4xl font-semibold">Loved by people!</h2>
      <p className="text-xl text-muted-foreground mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste odit, ad quisquam explicabo nulla?
      </p>
      <div className="grid grid-cols-3 grid-rows-2 w-full mt-16 gap-x-8 gap-y-8">
        <Comment />
      </div>
    </Animation>
  );
}
