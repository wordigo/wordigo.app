import React from "react";

import TwitterComponent from "./TwitterComponent";

export default function Section_4() {
  const text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const text2 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  return (
    <section className="m-auto max-w-[1440px] py-9 flex flex-col my-[60px]">
      <div className="flex items-center gap-[34px] max-w-[1440px] flex-wrap justify-center m-auto">
        <span className="flex flex-col gap-[34px]">
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text1}></TwitterComponent>
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text1}></TwitterComponent>
        </span>
        <span className="flex flex-col gap-[34px]">
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text1}></TwitterComponent>
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text2}></TwitterComponent>
        </span>
        <span className="flex flex-col gap-[34px]">
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text1}></TwitterComponent>
          <TwitterComponent avatar={""} name="Yusuf Güneş" position="Front-end Developer" text={text1}></TwitterComponent>
        </span>
      </div>
    </section>
  );
}
