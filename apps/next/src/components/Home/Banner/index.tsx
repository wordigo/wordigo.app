import TranslatePopup from "./Popup";
import { Badge } from "@wordigo/ui";
import { Zap } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Fragment, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDebounce } from "usehooks-ts";

const wordigoVocabulary = [
  "Nostalgia",
  "Serendipity",
  "Euphoria",
  "Sonorous",
  "Luminous",
  "Tranquility",
  "Ethereal",
  "Zenith",
  "Nadir",
  "Elixir",
  "Quintessential",
  "Epiphany",
  "Surreptitious",
  "Idyllic",
  "Melancholy",
  "Aurora",
  "Cascade",
  "Nebula",
  "Oasis",
  "Panacea",
  "Utopia",
  "Vortex",
  "Zen",
  "Alchemy",
  "Boreal",
  "Chiaroscuro",
  "Dichotomy",
  "Enigma",
  "Fjord",
  "Gossamer",
  "Halcyon",
  "Iridescent",
  "Juxtapose",
  "Kaleidoscope",
  "Limerence",
  "Mosaic",
  "Nocturnal",
  "Omnipotent",
  "Pandemonium",
  "Quasar",
  "Rhapsody",
  "Solstice",
  "Tapestry",
  "Undulate",
  "Vivacious",
  "Whimsical",
  "Xenophile",
  "Yugen",
  "Zephyr",
  "Arcane",
  "Bucolic",
  "Cacophony",
  "Dalliance",
  "Effervescent",
  "Felicity",
  "Grandeur",
  "Hiraeth",
  "Ineffable",
  "Jubilant",
  "Kinetic",
  "Labyrinthine",
  "Magnanimous",
  "Nefarious",
];

export default function FeatureBanner() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState("");
  const debouncedWord = useDebounce<string>(selectedWord, 500);
  const wordRefs = useRef({});

  const [popupCoords, setPopupCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    word: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    const wordElement = event.target as HTMLElement;
    const wordRect = wordElement.getBoundingClientRect();

    const newCoords = {
      x: wordRect.left + wordRect.width / 2 - 200,
      y: wordRect.top + wordRect.height / 2 + 30,
    };

    setPopupCoords(newCoords);
    wordRefs.current[word] = wordElement;
    setSelectedWord(word);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setSelectedWord("");
  };

  return (
    <Fragment>
      {isOpen && (
        <TranslatePopup
          style={{
            position: "fixed",
            top: `${popupCoords.y}px`,
            left: `${popupCoords.x}px`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
          selectedWord={debouncedWord}
        />
      )}
      <section className="w-full flex flex-col items-center px-20 py-24 max-md:px-4 max-lg:py-16 relative">
        <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
          <Zap className="mr-2 h-4 w-4" />
          {t("feature_mockup.badge")}
        </Badge>
        <h2 className="mt-4 text-4xl font-semibold max-lg:text-3xl">
          {t("feature_mockup.heading")}
        </h2>
        <p className="text-xl text-muted-foreground mt-5 max-lg:text-lg max-lg:mt-4">
          {t("feature_mockup.description")}
        </p>
        <div className="h-[25rem] lg:w-[40rem] lg:mt-12 lg:min-w-[35rem] lg:h-[28rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] max-lg:mt-12 border-4 border-primary bg-primary rounded-[0.625rem] mt-16 text-white backdrop-blur-xl overflow-hidden">
          <div className="top-0 left-0 w-full h-full flex flex-col justify-center shadow-[inset_0px_-7px_11px_22px] shadow-gray-50 items-center bg-white text-black rounded-[0.625rem]">
            <div
              className="flex flex-wrap justify-center absolute p-1 z-10 "
              tabIndex={5}
            >
              {wordigoVocabulary.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "text-2xl text-center px-1 py-1 opacity-10 transition-all duration-300 cursor-pointer hover:opacity-100",
                    selectedWord === word && "opacity-100"
                  )}
                  onMouseEnter={(event) => handleMouseEnter(word, event)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
