import { useState } from "react";
import { PartyPopper, X } from "lucide-react";

import { Button } from "@wordigo/ui";

const Banner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    isBannerOpen && (
      <div className="rounded-xl flex items-center justify-between border mt-5 p-3">
        <div className="flex items-center">
          <div className="w-10 h-10 p-2.5 border rounded-[0.5rem] mr-4">
            <PartyPopper className="w-5 h-5 animate-pulse" />
          </div>
          <p className="text-sm">
            We have <span className="font-semibold">amazing news,</span> just for you! Learn from our blog!
          </p>
        </div>
        <div className="flex items-center">
          <Button className="mr-2" variant="default">
            See More
          </Button>
          <Button variant="ghost" onClick={closeBanner}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  );
};

export default Banner;
