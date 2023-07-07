import Image from "next/image";

import { Button } from "@wordigo/ui";

export default function Section2_Container() {
  return (
    <section>
      <div className="container px-4 mx-auto max-w-[1440px] w-[1440px]">
        <div className="relative py-18 px-6 bg-blue-500 rounded-2xl overflow-hidden">
          <Image
            src="/images/background-banner-squares.png"
            width={1126}
            height={323}
            className="absolute top-0 left-0 h-full w-full object-cover opacity-70"
            alt=""
            data-config-id="auto-img-1-4"
          />
          <div className="relative max-w-lg mx-auto text-center my-[25px]">
            <h3 className="text-3xl font-bold text-white mb-3">Lorem Ipsum</h3>
            <p className="font-medium text-blue-200 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cum deserunt enim quia mollitia atque natus nostrum eaque.
            </p>
            <Button variant={"default"} size={"lg"}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
