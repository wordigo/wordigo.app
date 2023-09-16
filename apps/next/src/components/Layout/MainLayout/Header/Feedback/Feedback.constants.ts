import { Frown, type LucideIcon } from "lucide-react";

export interface IFeedbackType {
  title: string;
  emoji: LucideIcon;
  level: number;
}

const feedbacks: IFeedbackType[] = [
  {
    title: "Kötü",
    emoji: Frown,
    level: 0,
  },
  {
    title: "Berbat",
    emoji: Frown,
    level: 1,
  },
  {
    title: "İğrenç",
    emoji: Frown,
    level: 2,
  },
  {
    title: "Bok Gibi",
    emoji: Frown,
    level: 3,
  },
  {
    title: "Bok Gibi",
    emoji: Frown,
    level: 4,
  },
];

export default feedbacks;
