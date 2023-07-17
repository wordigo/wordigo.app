export interface IFeature {
  title: string;
  description: string;
  positionRight?: boolean;
}

const Features: IFeature[] = [
  {
    title: "Learn",
    description:
      "By clicking on the Wordigo translation button on the screen, you can view the translation of the selected on the screen text in your preferred language and listen to its pronunciation.",
  },
  {
    positionRight: true,
    title: "Add",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
  },
  {
    title: "Share",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
  },
];

export default Features;
