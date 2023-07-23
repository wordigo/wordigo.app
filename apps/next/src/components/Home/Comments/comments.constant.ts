export interface IComment {
  title: string;
  description: string;
  image: string;
  name: string;
  userDescription: string;
}

const Comment: IComment[] = [
  {
    description:
      "This web application is a language lover's dream! The ability to add words to my personal dictionary and share them with others is incredibly useful. I can easily organize and expand my vocabulary while connecting with fellow language enthusiasts.",
    name: "Ali Osman Delişmen",
    image: "https://avatars.githubusercontent.com/u/106361546?v=4",
    title: "Empower Your Vocabulary",
    userDescription: "Full Stack Developer",
  },
  {
    description:
      "I'm thoroughly impressed with the word-sharing feature of this web application. It's so convenient to publish my customized dictionary with others, allowing us to collaborate and learn from each other's linguistic discoveries. It's a game-changer for language learning!",
    name: "Yusuf Güneş",
    image:
      "https://media.licdn.com/dms/image/C4D03AQE69stnfq0hLg/profile-displayphoto-shrink_800_800/0/1644590087439?e=1694649600&v=beta&t=ktid4pHV_4W8eiFPXmQ9xZyt3Ohrn9nDY-qMHMk-2ck",
    title: "Unlock the World of Words",
    userDescription: "Frontend Developer",
  },
  {
    description:
      "The translation extension in this web app is a lifesaver! No longer do I get stuck on unfamiliar words; with a simple click, I can instantly translate them into various languages. It's like having a language expert at my fingertips.",
    name: "Muhammet Sefa Kapısız",
    image: "https://avatars.githubusercontent.com/u/62629437?v=4",
    title: "Translation Made Effortless",
    userDescription: "Backend Developer",
  },
  {
    description:
      "I've tried numerous language-related web applications, but this one stands out with its exceptional dictionary management and collaborative options. The seamless integration of word sharing and the translation extension makes language learning both fun and efficient.",
    name: "Mustafa Pekkirişci",
    image: "https://avatars.githubusercontent.com/u/121763536?v=4",
    title: "A Language Lover's Haven",
    userDescription: "Frontend Developer & UX Designer",
  },
  {
    description:
      "Kudos to the developers of this web application for empowering users to shape their language journey. The ability to personalize my dictionary and easily share it with a community of language enthusiasts fosters a sense of camaraderie and mutual growth.",
    name: "Fatih Yıldız",
    image: "https://avatars.githubusercontent.com/u/47571500?v=4",
    title: "Community-Driven Language Learning",
    userDescription: "UI Designer",
  },
  {
    description:
      "I can't get enough of this web app's dictionary customization and translation features. It's become an indispensable tool for both my professional and personal language pursuits. Whether I'm learning a new language or refining my vocabulary, this application is always my go-to resource.",
    name: "Ali Osman Delişmen",
    image: "https://avatars.githubusercontent.com/u/106361546?v=4",
    title: "Your Ultimate Language Companion",
    userDescription: "Full Stack Developer",
  },
];

export default Comment;
