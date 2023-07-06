import { FaCloudDownloadAlt, FaLanguage } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import Arrow_2 from "../Arrow_2";

export default function Section_02() {
  return (
    <section className="ml-[30px] mt-[20px] w-full">
      <div className="mt-[80px] text-[#333549]">
        <p className="font-semibold text-[14px] text-primary-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="my-[20px] text-[45px] font-bold">
          <h1>Lorem Ipsum is simply</h1>
          <h1 className="mt-[-15px]">
            dummy text of the <span className="text-primary-blue">printing!</span>
          </h1>
        </div>

        <div className="font-semibold text-[14px]">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>and typesetting industry.</p>
        </div>

        {/* Data Information */}
        <div className="mt-[40px] flex flex-col gap-4">
          <div>
            <span className="flex gap-3 items-center">
              <div className="rounded-lg text-[30px] text-center">
                <FaLanguage></FaLanguage>
              </div>
              <span>
                <h1 className="font-semibold text-[15px]">+10 Language</h1>
              </span>
            </span>
          </div>

          <span className="flex gap-3 items-center">
            <div className="rounded-lg text-[30px] text-center">
              <FaPeopleGroup></FaPeopleGroup>
            </div>
            <span>
              <h1 className="font-semibold text-[15px]">+99 Learner</h1>
            </span>
          </span>

          <span className="flex gap-3 items-center">
            <div className="rounded-lg text-[30px] text-center">
              <FaCloudDownloadAlt></FaCloudDownloadAlt>
            </div>
            <span>
              <h1 className="font-semibold text-[15px]">+99 Downloads</h1>
            </span>
          </span>
        </div>

        <div className="w-full relative bg-black mt-[-100px]">
          <span className="absolute right-0">
            <Arrow_2></Arrow_2>
          </span>

          <div className="right-[170px] mt-[130px] absolute bg-gray-400 py-[10px] px-[25px] rounded-lg w-[320px] h-[120px]"></div>
        </div>
      </div>
    </section>
  );
}
