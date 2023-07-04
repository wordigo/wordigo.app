import Image from "next/image";
import Notification from "@/components/home/Notification";
import Section_1 from "@/components/home/Section1/Section1_Container";

import { Button } from "@wordigo/ui";

export default function index() {
  return (
    <div>
      <div className="flex flex-col gap-y-16">
        <div>
          <Notification></Notification>
          <Section_1></Section_1>
          <div>
            <section className="mt-5">
              <div className="container px-4 mx-auto">
                <div className="relative py-18 px-6 bg-blue-500 rounded-2xl overflow-hidden">
                  <Image
                    src="/background-banner-squares.png"
                    width={1126}
                    height={323}
                    className="absolute top-0 left-0 h-full w-full object-cover opacity-70"
                    alt=""
                    data-config-id="auto-img-1-4"
                  />
                  <div className="relative max-w-sm mx-auto text-center my-[25px]">
                    <h3 className="text-3xl font-bold text-white mb-3">Ideal banner asset for your dashboard project</h3>
                    <p className="font-medium text-blue-200 mb-6">Go global with our UI Resources and solutions</p>
                    <Button variant={"default"} size={"lg"}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
