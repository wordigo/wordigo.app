import { type Dictionary } from "@/store/dictionaries/type";

export const InıtialDictionary = "Initial";

export const computedDictionaries = (
  dictionaries: Dictionary[]
): Dictionary[] => {
  return dictionaries?.slice().sort((a, b) => {
    if (a?.title === InıtialDictionary) {
      return -1;
    } else if (b?.title === "Initial") {
      return 1;
    } else {
      return a?.title.localeCompare(b?.title);
    }
  });
};
