import React from "react";
import Link from "next/link";
import HomeHeader from "@/components/home/HomeHeader";
import Arrow_2 from "./Arrow_2";
import { FaLanguage, FaCloudDownloadAlt } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { Button } from "@acme/ui";

export default function Section_1() {
  return (
    <div className="m-auto max-w-[1440px] flex flex-col mt-3">
      <main className="m-auto max-w-[1440px] mx-3 flex justify-between">
        <section className="ml-[80px] mt-[20px] w-full">
          <HomeHeader></HomeHeader>
          <div className="mt-[80px] text-[#333549]">
            <p className="font-semibold text-[14px] text-[#4BB1AA]">Make your commutes more productive</p>

            <div className="my-[20px] text-[45px] font-bold">
              <h1>The free, fun, and effective</h1>
              <h1 className="mt-[-15px]">
                way to learn a <span className="text-[#FB8A8B]">language!</span>
              </h1>
            </div>

            <div className="font-semibold text-[14px]">
              <p>Welcome to the convenient, fast, and affordable English test</p>
              <p>accepted around the world.</p>
            </div>

            {/* Data Information */}
            <div className="mt-[40px] flex flex-col gap-4">
              <div>
                <span className="flex gap-3 items-center">
                  <div className="rounded-lg text-[30px] text-center"><FaLanguage></FaLanguage></div>
                  <span>
                    <h1 className="font-semibold text-[15px]">Lorem Ipsum</h1>
                  </span>
                </span>
              </div>

              <span className="flex gap-3 items-center">
                <div className="rounded-lg text-[30px] text-center"><FaPeopleGroup></FaPeopleGroup></div>
                <span>
                  <h1 className="font-semibold text-[15px]">Lorem Ipsum</h1>
                </span>
              </span>

              <span className="flex gap-3 items-center">
                <div className="rounded-lg text-[30px] text-center"><FaCloudDownloadAlt></FaCloudDownloadAlt></div>
                <span>
                  <h1 className="font-semibold text-[15px]">Lorem Ipsum</h1>
                </span>
              </span>
            </div>

            <div className="w-full relative bg-black mt-[-100px]">
              <span className="absolute right-[-35px]">
                <Arrow_2></Arrow_2>
              </span>

              <div className="right-[100px] mt-[120px] absolute bg-gray-400 py-[10px] px-[25px] rounded-lg w-[320px] h-[120px]">
              </div>
            </div>
          </div>
        </section>

        <section className="w-[450px] min-w-[450px] rounded-2xl flex items-center flex-col bg-gradient-to-t from-white via-[#f9fdff] to-[#f8fcff]">
          <div className="flex gap-6 mt-[20px]">
            TR
            <div className="w-[2px] bg-gray-700"></div>
            <span>
              <Button variant={'outline'} className="bg-transparent h-[30px] mr-3 border-gray-700">Sign in</Button>
              <Button variant={'outline'} className="bg-[#4BB1AA] h-[30px] text-white">Sign up</Button>
            </span>
          </div>

          <div className="mt-[80px] mb-[80px] w-full px-[50px]">
            {/* Extension File */}
            <div className="bg-gray-400 w-full h-[500px] rounded-lg "></div>
          </div>
        </section>
      </main>
    </div>
  );
}
