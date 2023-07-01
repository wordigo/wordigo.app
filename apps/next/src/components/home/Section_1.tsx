import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import Link from "next/link";




export default function Section_1() {
  return (
    <div className="h-screen m-auto max-w-[1440px] py-9 flex flex-col">
      <HomeHeader></HomeHeader>

      <div className="m-auto">
        <div className="m-auto font-bold text-center text-[60px]">
          <h1>
            Accounting <span className="text-[#1D64F3]">made simple</span>
          </h1>
          <h1 className="mt-[-8px]">for small businesses.</h1>
        </div>

        <div className="m-auto text-center items-center text-[#4A5562] mt-[30px] font-medium">
          <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer</p>
          <p className="mt-1">took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="flex items-center justify-center mt-[48px] text-center font-medium">
          <button className="bg-[#111928] text-white mr-6 px-[20px] py-[6px] rounded-3xl">Get Start</button>
          <button className="mr-6 px-[20px] py-[6px] rounded-3xl border-2 border-[#E5E7EB] text-[#4A5562] flex items-center gap-2">Watch video</button>
        </div>
      </div>
    </div>
  );
}