import { useState } from "react";
import { PartyPopper } from "lucide-react";

import { Button } from "@wordigo/ui";

const Banner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    isBannerOpen && (
      <section className="w-full border-b py-3">
        <div className="max-w-[90rem] px-20 flex items-center mx-auto justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 p-2.5 border rounded-[0.5rem] mr-4">
              <PartyPopper className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-sm">
              We have <span className="font-semibold">amazing news,</span> just for you! Learn from our blog!
            </p>
          </div>
          <div className="flex items-center">
            <Button variant="default">See More</Button>
            {/* <Button variant="ghost" onClick={closeBanner}>
                <X className="w-4 h-4" />
              </Button> */}
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
