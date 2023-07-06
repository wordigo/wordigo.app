import React from "react";

export default function Section3_Container() {
  const title_1 = "Lorem Ipsum";
  const description_1_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_1_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const title_2 = "Lorem Ipsum";
  const description_2_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_2_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const title_3 = "Lorem Ipsum";
  const description_3_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_3_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  return (
    <>
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-[#333549] dark:text-white">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">{title_1}</h2>
            <p className="mb-4 opacity-80">{description_1_01}</p>
            <p className="opacity-80">{description_1_02}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </div>
          <div className="font-light text-[#333549] dark:text-white">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">{title_2}</h2>
            <p className="mb-4 opacity-80">{description_2_01}</p>
            <p className="opacity-80">{description_2_02}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-[#333549] dark:text-white">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">{title_3}</h2>
            <p className="mb-4 opacity-80">{description_3_01}</p>
            <p className="opacity-80">{description_3_02}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
