import { Flame, type LucideIcon, Star, Zap } from "lucide-react";

export interface Price {
  Icon: LucideIcon;
  planName: string;
  popular: boolean;
  price: string;
  priceDescription: string;
  features: string[];
}

const prices: Price[] = [
  {
    Icon: Zap,
    planName: "Free",
    popular: false,
    price: "$0/mth",
    priceDescription: "This description for free plan.",
    features: ["Access to all basic features", "Access to all basic features"],
  },
  {
    Icon: Flame,
    planName: "Pro",
    popular: true,
    price: "$15/mth",
    priceDescription: "This description for pro plan.",
    features: [
      "Access to all basic features",
      "Access to all basic features",
      "Access to all basic features",
      "Access to all basic features",
      "Access to all basic features",
    ],
  },
  {
    Icon: Star,
    planName: "Business",
    popular: false,
    price: "$10/mth",
    priceDescription: "This description for business plan.",
    features: ["Access to all basic features", "Access to all basic features"],
  },
];

export default prices;
