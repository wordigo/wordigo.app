import Comment from "./Comment";

export default function Comments() {
  return (
    <div className="container mx-auto max-w-screen-8xl w-full my-10">
      <h1 className="w-full text-center font-semibold text-[24px]">Loved by people</h1>
      <div className="flex gap-6 items-center justify-center flex-wrap my-10">
        <Comment
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          name="Lorem Ipsum"
          src=""
          title="Lorem Ipsum"
        />

        <Comment
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          name="Lorem Ipsum"
          src=""
          title="Lorem Ipsum"
        />

        <Comment
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          name="Lorem Ipsum"
          src=""
          title="Lorem Ipsum"
        />

        <Comment
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          name="Lorem Ipsum"
          src=""
          title="Lorem Ipsum"
        />
      </div>
    </div>
  );
}
