import { BookMarked, ExternalLink, GraduationCap, type LucideIcon, Users } from "lucide-react";

export interface IFeature {
  Icon: LucideIcon;
  title: string;
  description: string;
  primaryButtonName: string;
  primaryButtonLink: string;
  secondaryButtonName: string;
  secondaryButtonLink: string;
  SecondaryButtonIcon: LucideIcon;
  image: string;
  positionLeft?: boolean;
}

const Features: IFeature[] = [
  {
    Icon: GraduationCap,
    title: "Learn",
    description:
      "By clicking on the Wordigo translation button on the screen, you can view the translation of the selected on the screen text in your preferred language and listen to its pronunciation.",
    primaryButtonName: "Get Started",
    primaryButtonLink: "/auth/signup",
    secondaryButtonName: "Get Extension",
    secondaryButtonLink: "/",
    SecondaryButtonIcon: ExternalLink,
    image: "/images/extension.png",
  },
  {
    Icon: BookMarked,
    positionLeft: true,
    title: "Add",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    primaryButtonName: "Get Started",
    primaryButtonLink: "/auth/signup",
    secondaryButtonName: "Get Extension",
    secondaryButtonLink: "/",
    SecondaryButtonIcon: ExternalLink,
    image: "/images/extension.png",
  },
  {
    Icon: Users,
    title: "Share",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    primaryButtonName: "Get Started",
    primaryButtonLink: "/auth/signup",
    secondaryButtonName: "Get Extension",
    secondaryButtonLink: "/",
    SecondaryButtonIcon: ExternalLink,
    image: "/images/extension.png",
  },
];

export default Features;
