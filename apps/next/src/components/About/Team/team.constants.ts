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
    src: "https://media.licdn.com/dms/image/D4D03AQGh0SGDZruHMA/profile-displayphoto-shrink_400_400/0/1690736094511?e=1696464000&v=beta&t=rYDq6ZJ0nCKaCtEuE8dQDes0t2kZlcfXi5WEzAd2vdI",
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
    name: "Mustafa Pekkirişci",
    src: "https://avatars.githubusercontent.com/u/121763536?v=4",
    title: "Frontend Developer & UX Designer",
    github: "https://github.com/pekkiriscim",
    linkedin: "https://www.linkedin.com/in/pekkiriscim",
    twitter: "https://twitter.com/pekkiriscim",
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
