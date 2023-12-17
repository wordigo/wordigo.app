import { Badge, Button, Input } from "@wordigo/ui";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

function BlogHeroSection() {
  return (
    <div className="w-full pt-8 pb-24 px-20 grid grid-cols-2 gap-x-16 max-lg:grid-cols-1 justify-center items-center max-lg:flex max-lg:flex-col max-lg:pb-16 max-md:px-4">
      <section className="flex flex-col items-start justify-center max-lg:items-center">
        <Badge
          className="text-sm font-medium px-2.5 py-1 self-start"
          variant="outline"
        >
          <div className="w-2.5 h-2.5 mr-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-primary animate-ping rounded-full"></span>
          </div>
          Be the first to know - subscribe now!{" "}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Badge>
        <h1 className="text-6xl text-left font-semibold mt-4 max-lg:text-5xl max-md:text-3xl">
          Enhance Your Language Skills with Wordigo!
        </h1>
        <p className="text-left font-normal text-xl text-muted-foreground mt-6 max-lg:text-lg max-lg:mt-4 max-md:text-lg">
          Quickly translate texts with Wordigo's translation button. Subscribe
          for updates and offers!
        </p>
        <div className="flex gap-x-2 mt-6 max-lg:mt-8">
          <Input
            className="col-span-2 max-md:col-span-1 h-10 w-60"
            placeholder="Enter your email"
          />
          <Button size="default">Subscribe</Button>
        </div>
      </section>
      <section className="relative aspect-square lg:min-w-[30rem] xl:max-w-[40rem] xl:max-h-[35rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] max-lg:mt-12 mt-0">
        <Image
          src="/images/hero-extension.png"
          fill
          alt="Wordigo Extension"
          className="rounded-2xl object-cover"
        />
      </section>
    </div>
  );
}

export default BlogHeroSection;
