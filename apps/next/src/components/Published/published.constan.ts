export interface IPublished {
  [x: string]: any;
  title: string;
  src: string | null;
  description: string;
  user: IUser;
  rating: string | null;
  words_length: string;
  id: number;
}

interface IUser {
  name: string;
  profil_avatar: string | null;
}

const published: IPublished[] = [
  {
    description: "Des1",
    rating: "5",
    src: "",
    title: "Title1",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 1,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 2,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 3,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 4,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 5,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 5,
  },

  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 6,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 7,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 8,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 9,
  },
  {
    description: "Des2",
    rating: "5",
    src: "",
    title: "Title2",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 10,
  },

  {
    description: "Des3",
    rating: "5",
    src: "",
    title: "Title3",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 11,
  },
  {
    description: "Des4",
    rating: "5",
    src: "",
    title: "Title4",
    user: {
      name: "Ipsum",
      profil_avatar: "",
    },
    words_length: "",
    id: 12,
  },
];

export default published;
