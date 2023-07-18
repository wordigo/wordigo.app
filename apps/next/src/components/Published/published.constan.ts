export interface IPublished {
    title: string,
    src: string | null,
    description: string,
    user: IUser,
    rating: string | null,
    words_length: string,
}

interface IUser {
    name: string,
    profil_avatar: string | null,
}

const published: IPublished[] = [
    {
        description: "Des1",
        rating: "5",
        src: "",
        title: "Title1",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des2",
        rating: "5",
        src: "",
        title: "Title2",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des2",
        rating: "5",
        src: "",
        title: "Title2",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des2",
        rating: "5",
        src: "",
        title: "Title2",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des2",
        rating: "5",
        src: "",
        title: "Title2",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des3",
        rating: "5",
        src: "",
        title: "Title3",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    },
    {
        description: "Des4",
        rating: "5",
        src: "",
        title: "Title4",
        user: {
            name: "Ipsum",
            profil_avatar: ""
        },
        words_length: ""
    }
]

export default published