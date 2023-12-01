import Breadcrumb from "@/components/Blog/Breadcrumb/Breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import { XIcon } from "lucide-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

export default function BlogContent() {
  const [isBlogSaved, setIsBlogSaved] = useState(true);
  const dummyData = [
    { id: 1, text: "Blogs", link: "blogs" },
    { id: 2, text: "Lorem ipsum", link: "#" },
  ];

  return (
    <MainLayout>
      <div className="flex justify-center p-0 pt-0 mt-2 px-0">
        <div className="w-full md:max-w-4xl  flex gap-2 md:gap-6 flex-col">
          <Breadcrumb data={dummyData} />
          <div className="flex  justify-between w-full mt-2 md:mt-5">
            <div className=" w-full flex flex-col gap-2 md:gap-6">
              <div className="flex w-full gap-2 md:gap-0 items-center justify-between">
                <div className="text-xl md:text-3xl">
                  Lorem ipsum dolor sit amet.
                </div>{" "}
                <div className=" py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center whitespace-nowrap">
                  02.05.2013 · 12 min read
                </div>{" "}
              </div>
              <div className="bg-gray-600 w-full h-52 rounded-lg overflow-hidden"></div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                <div className="flex items-center gap-3 pt-2 w-full">
                  <div className="bg-black w-12 h-12 rounded-full"></div>
                  <div>
                    <div className="text-lg font-normal">Omer Ozceylan</div>
                    <div className="font-normal py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs  border justify-center">
                      Frontend Dev.
                    </div>
                  </div>
                </div>
                <div className=" flex  items-center gap-7 md:w-fit w-full md:justify-normal justify-between">
                  <div className="flex items-center gap-2">
                    <div className=" dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  font-medium border text-sm gap-2 justify-center cursor-pointer dark:bg-DarkBackground whitespace-nowrap hover:bg-slate-200 ">
                      <XIcon className="w-4 dark:fill-white fill-black" />
                      {/* <XIconSvg className="w-4" /> */}
                      Tweet
                    </div>
                    <div className=" dark:text-white text-black transition-all py-1 w-fit flex items-center px-2 rounded-[0.625rem]  dark:bg-DarkBackground font-medium border text-sm gap-2 justify-center cursor-pointer whitespace-nowrap hover:bg-slate-200">
                      <MdContentCopy className="w-4 dark:fill-white fill-black" />
                      Copy Link
                    </div>
                  </div>
                  <div>
                    {isBlogSaved ? (
                      <FaBookmark className="w-6 fill-black dark:fill-white" />
                    ) : (
                      <FaRegBookmark className="w-6 fill-black dark:fill-white" />
                    )}

                    {/* <SaveLigtSvg className="w-11 cursor-pointer fill-white hidden dark:block" />
                    <SaveSvg className="w-11 cursor-pointer  block dark:hidden" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="leading-[200%] border-t-[1px] border-gray-300 pt-4">
            &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magnam, iure nesciunt recusandae neque illo exercitationem adipisci
            veniam labore quibusdam dicta consectetur aliquam! Dolore enim,
            culpa saepe illum sit expedita quibusdam ab earum, dicta quaerat eos
            laudantium odit modi fugiat! Repellat ab illum quos porro amet
            voluptatibus! Eos sit et provident nihil itaque? Sequi, placeat at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quo
            earum molestiae ipsam cupiditate repudiandae aspernatur ad sunt.
            <br />
            <br />
            &nbsp;Laboriosam natus id accusantium veniam est nam vitae. Nihil et
            laborum qui dolores amet quo eveniet nemo vitae voluptatibus,
            accusamus velit quisquam nisi sed laudantium voluptates corporis
            dolor reiciendis nostrum error illo dolorum? Debitis maxime officiis
            adipisci nobis assumenda ratione praesentium! Laborum, inventore
            quas earum dignissimos ad iusto facilis voluptatum, tempora maxime
            eligendi tenetur. Sapiente obcaecati minima animi illo enim corporis
            error consequatur, et architecto veniam, labore ut soluta doloremque
            accusamus quidem natus. Impedit fuga minus modi perspiciatis in
            sapiente dolore qui mollitia odio! Illo repellendus ratione quisquam
            tempore vel consectetur reiciendis cupiditate sapiente suscipit
            quasi quo, odio dolorum ab laudantium. Voluptatibus!
            <br />
            <br />
            &nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Commodi sapiente consequatur expedita doloremque sunt aliquam quasi
            voluptates temporibus consequuntur, veniam molestias voluptatem ad
            atque accusantium minima cum natus eos perferendis dolor! Saepe
            expedita voluptatibus perferendis minima, odio itaque similique
            totam? Illum non ex, commodi aut accusamus doloribus obcaecati ad
            accusantium iste eos, distinctio modi ab quis officia. Consequuntur
            labore accusamus blanditiis vitae corrupti vero iure eveniet,
            quisquam expedita voluptate iste est qui reiciendis facilis sapiente
            nisi! Maxime, numquam delectus, natus officiis vero obcaecati
            doloribus sit quibusdam dicta fugit omnis qui ea aliquam debitis
            iste consequatur accusantium veniam perspiciatis! Pariatur explicabo
            beatae aperiam architecto. Tenetur quae dolore natus quaerat quasi
            iure porro perferendis dolorum minus distinctio tempora aperiam
            autem maiores repellat nam ullam atque eius cumque aut, nostrum
            doloremque. Explicabo debitis sequi nam suscipit eligendi sunt eum
            rerum voluptatem, quaerat deserunt neque in eaque est vitae
            similique nesciunt. Libero dignissimos, consequatur pariatur
            consectetur quaerat inventore dicta quasi quidem quos
            exercitationem, tempore aliquam iure nesciunt quibusdam eveniet
            dolorum voluptate? Magnam perspiciatis, corrupti, cupiditate aliquam
            eius eaque animi laboriosam consequuntur consectetur accusamus quam
            doloribus numquam, quaerat repellat nisi quas et doloremque
            similique. Quaerat obcaecati assumenda eveniet, voluptatibus ut
            quasi libero placeat porro alias nisi a atque, aliquid laudantium,
            cupiditate quis quisquam est? Quidem ratione voluptate a ipsa ut
            expedita. Architecto ut quod nesciunt? Porro nobis sit repellat
            facere, corporis dolor nesciunt recusandae sunt maiores ipsa.
            Maiores, et hic consequuntur, quae quia harum ut totam omnis sequi,
            esse odit. Omnis iusto aut commodi, animi quidem quibusdam fugiat!
            Error dicta perferendis animi magnam quidem, officiis facilis
            accusamus sint voluptas impedit deleniti eos laborum illum beatae
            voluptatibus corporis, ab nobis quod obcaecati aliquid assumenda,
            doloremque necessitatibus repudiandae velit! Consequuntur, voluptas
            magnam cum obcaecati ullam ipsam atque, unde aliquid hic et modi
            aspernatur esse, optio maxime iste impedit similique illo. Modi,
            culpa tempore. Consequatur, rem, odit repellat sit non reiciendis
            ipsam vel illum cum reprehenderit quo inventore impedit quae
            numquam? Temporibus eligendi iure, assumenda qui nulla natus quos?
            Molestiae blanditiis in eaque mollitia sapiente omnis ducimus
            ratione fuga, consequatur quae doloribus quas enim eum facere, nobis
            accusamus natus vero sequi quisquam praesentium illum velit at. In
            molestias suscipit repudiandae iste incidunt aperiam, excepturi ab
            tempora rerum saepe voluptate culpa. Quibusdam enim corrupti sunt
            cum quaerat voluptatibus modi officiis dolore repellat non dicta
            tempore laboriosam alias, numquam velit culpa deserunt consequatur
            distinctio esse qui perspiciatis. Ex quam illum distinctio numquam,
            in quae repellat soluta explicabo dolorem consectetur modi libero
            maxime, cumque inventore quo placeat sapiente ut? Culpa, officiis
            sapiente cum voluptatem, nesciunt vero architecto pariatur enim quia
            fugiat commodi amet iusto rerum at sint modi exercitationem tempore,
            nulla velit eveniet? Officia exercitationem deleniti veniam natus
            distinctio vel consequatur nobis magnam ad delectus voluptate esse
            itaque dolor dignissimos omnis neque cum minus maxime dolore
            commodi, nam aut aliquid. Enim delectus sit blanditiis deleniti
            fugit beatae aliquam odit ut voluptatem voluptate dolores tempore
            obcaecati doloribus officiis consequatur minima, dicta atque iure
            nesciunt, animi perferendis quibusdam debitis sapiente iste. At,
            libero.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "zod"])) },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }],
    fallback: false,
  };
}
