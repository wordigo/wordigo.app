import React, { useState } from "react";
import { Star } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Button, Dialog, DialogContent, DialogTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export function Rating() {
  const { t } = useTranslation();

  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);

  const getRatingText = () => {
    switch (rating) {
      case 1:
        return "public.too_bad";

      case 2:
        return "public.bad";

      case 3:
        return "public.not_bad";

      case 4:
        return "public.good";

      case 5:
        return "public.very_good";

      default:
        return "public.not_bad";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="icon">
          <Star className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <header className="text-[hsl(var(--muted-foreground))] font-semibold text-center">
          <h1>{t("public.rating_title")}</h1>
        </header>
        <main className="wrapper flex items-center justify-center mt-1 my-2">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            const starClasses = cn({
              fa: true,
              "text-yellow-400 fill-yellow-400": ratingValue <= (hover || rating),
              "fill-gray-100 text-gray-100": ratingValue > (hover || rating),
            });
            return (
              <label key={i} className="mr-2">
                <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} className="hidden" />
                <Star className={cn(starClasses)} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}></Star>
              </label>
            );
          })}
        </main>
        <footer className="text-[hsl(var(--muted-foreground))] font-semibold text-center">
          <Button variant="outline" className="min-w-[120px] max-w-[150px]">
            {t(getRatingText())}
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
