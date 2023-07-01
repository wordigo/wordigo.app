import React from "react";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";





export default function Section_5() {
  return (
    <section className="m-auto max-w-[1440px] py-9 flex flex-col">
      <h1 className="text-[34px] font-semibold">Frequently asked questions</h1>
      <h1 className="mt-[35px] mb-[186px]">
        If you can`t find what you`re looking for, email our support team and if you`re <div>lucky someone will get back to you.</div>
      </h1>

      <div className="text-center">LOGO</div>

      <div className="mt-[35px] mb-[50px] flex items-center justify-center gap-8 text-[#4A5562]">
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Translate</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      <hr />

      <div className="mt-[20px] flex items-center justify-between">
        <p>Copyright © 2023 IPSUM. All rights reserved.</p>

        <span className="flex gap-3">
            <BsTwitter></BsTwitter>
            <BsGithub></BsGithub>
        </span>
      </div>
    </section>
  );
}