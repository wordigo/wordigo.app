import Image from "next/image";
import Animation from "@/components/Animation";
import { Zap } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Badge } from "@wordigo/ui";

export default function FeatureBanner() {
  const { t } = useTranslation();
  return (
    <Animation>
      <div className="w-full flex flex-col items-center px-20 py-24">
        <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
          <Zap className="mr-2 h-4 w-4" />
          Check out our new translate extension!
        </Badge>
        <h2 className="mt-4 text-4xl font-semibold">Start using our extension, today.</h2>
        <p className="text-xl text-muted-foreground mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis sunt atque dolore consectetur incidunt!
        </p>
        <div className="w-[48rem] relative h-[32rem] border-4 border-primary bg-primary rounded-[0.625rem] mt-16">
          <Image src="/images/extension.png" fill alt="" className="rounded-[0.3125rem]" />
        </div>
      </div>
    </Animation>
  );
}
