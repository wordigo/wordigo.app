export interface ITeam {
  name: string;
  src: string;
  title: string;
  github: string | null;
  twitter: string | null;
  linkedin: string | null;
}

const Team: ITeam[] = [
  {
    name: "Ali Osman Delişmen",
    src: "https://avatars.githubusercontent.com/u/106361546?v=4",
    title: "Full Stack Developer",
    github: "https://github.com/osmandlsmn",
    linkedin: "https://www.linkedin.com/in/ali-osman-delismen/",
    twitter: "https://twitter.com/osmandlsmn",
  },
  {
    name: "Yusuf Güneş",
    src: "https://media.licdn.com/dms/image/C4D03AQE69stnfq0hLg/profile-displayphoto-shrink_800_800/0/1644590087439?e=1694649600&v=beta&t=ktid4pHV_4W8eiFPXmQ9xZyt3Ohrn9nDY-qMHMk-2ck",
    title: "Frontend Developer",
    github: "https://github.com/yusufgns",
    linkedin: "https://www.linkedin.com/in/yusufgunes/",
    twitter: "https://twitter.com/yusugunes9",
  },
  {
    name: "Muhammet Sefa Kapısız",
    src: "https://avatars.githubusercontent.com/u/62629437?v=4",
    title: "Backend Developer",
    github: "https://github.com/sefakpsz",
    linkedin: "https://www.linkedin.com/in/muhammet-sefa-kap%C4%B1s%C4%B1z-26b136143/",
    twitter: "",
  },
  {
    name: "Fatih Yıldız",
    src: "https://avatars.githubusercontent.com/u/47571500?v=4",
    title: "UI Designer",
    github: "https://github.com/0fatihyildiz",
    linkedin: "https://www.linkedin.com/in/fatih-y%C4%B1ld%C4%B1z-b216b31b2/",
    twitter: "https://twitter.com/0fatihyildiz",
  },
];

export default Team;
