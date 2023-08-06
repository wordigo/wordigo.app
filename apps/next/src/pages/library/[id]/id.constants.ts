export interface WordPage {
  title: string;
  description: string;
  src: string;
  level: string;
  user: {
    name: string;
    profilAvatar: string;
  };
  rating: string;
  createdAt: string;
  sourceLanguage: string;
  targetLanguage: string;
  isMixed: boolean;
  wordsLength: string;
  words: {
    word: string;
    translatedWord: string;
  }[];
}

const WordPageConstants: WordPage = {
  title: "Greetings and Phrases",
  level: "A1",
  description: "Learn common greetings and phrases used in everyday conversations.",
  src: "/images/dictionary_banner.jpg",
  user: {
    name: "VerbWizard",
    profilAvatar: "https://avatars.githubusercontent.com/u/121763536?v=4",
  },
  rating: "4.8",
  createdAt: "5 August 2023",
  sourceLanguage: "GB",
  targetLanguage: "TR",
  isMixed: true,
  wordsLength: "50+",
  words: [
    {
      word: "Hello",
      translatedWord: "Merhaba",
    },
    {
      word: "Good morning",
      translatedWord: "Günaydın",
    },
    {
      word: "Good night",
      translatedWord: "İyi geceler",
    },
    {
      word: "Please",
      translatedWord: "Lütfen",
    },
    {
      word: "Thank you",
      translatedWord: "Teşekkür ederim",
    },
    {
      word: "You're welcome",
      translatedWord: "Rica ederim",
    },
    {
      word: "Excuse me",
      translatedWord: "Affedersiniz",
    },
    {
      word: "Sorry",
      translatedWord: "Üzgünüm",
    },
    {
      word: "How are you?",
      translatedWord: "Nasılsınız?",
    },
    {
      word: "I'm fine",
      translatedWord: "Ben iyiyim",
    },
    {
      word: "What's your name?",
      translatedWord: "Adınız nedir?",
    },
    {
      word: "My name is...",
      translatedWord: "Benim adım...",
    },
    {
      word: "Where are you from?",
      translatedWord: "Nerelisiniz?",
    },
    {
      word: "I'm from...",
      translatedWord: "Ben ...'danım",
    },
    {
      word: "Nice to meet you",
      translatedWord: "Tanıştığımıza memnun oldum",
    },
    {
      word: "Goodbye",
      translatedWord: "Hoşça kal",
    },
    {
      word: "See you later",
      translatedWord: "Sonra görüşürüz",
    },
    {
      word: "Have a nice day",
      translatedWord: "İyi günler",
    },
    {
      word: "Yes",
      translatedWord: "Evet",
    },
    {
      word: "No",
      translatedWord: "Hayır",
    },
    {
      word: "Maybe",
      translatedWord: "Belki",
    },
    {
      word: "I don't know",
      translatedWord: "Bilmiyorum",
    },
    {
      word: "Good",
      translatedWord: "İyi",
    },
    {
      word: "Bad",
      translatedWord: "Kötü",
    },
    {
      word: "Beautiful",
      translatedWord: "Güzel",
    },
    {
      word: "Ugly",
      translatedWord: "Çirkin",
    },
    {
      word: "Happy",
      translatedWord: "Mutlu",
    },
    {
      word: "Sad",
      translatedWord: "Üzgün",
    },
    {
      word: "Hungry",
      translatedWord: "Aç",
    },
    {
      word: "Thirsty",
      translatedWord: "Susuz",
    },
    {
      word: "Hot",
      translatedWord: "Sıcak",
    },
    {
      word: "Cold",
      translatedWord: "Soğuk",
    },
    {
      word: "Today",
      translatedWord: "Bugün",
    },
    {
      word: "Tomorrow",
      translatedWord: "Yarın",
    },
    {
      word: "Yesterday",
      translatedWord: "Dün",
    },
    {
      word: "Now",
      translatedWord: "Şimdi",
    },
    {
      word: "Later",
      translatedWord: "Sonra",
    },
    {
      word: "Always",
      translatedWord: "Her zaman",
    },
    {
      word: "Sometimes",
      translatedWord: "Bazen",
    },
    {
      word: "Never",
      translatedWord: "Asla",
    },
    {
      word: "Morning",
      translatedWord: "Sabah",
    },
    {
      word: "Afternoon",
      translatedWord: "Öğleden sonra",
    },
    {
      word: "Evening",
      translatedWord: "Akşam",
    },
    {
      word: "Night",
      translatedWord: "Gece",
    },
    {
      word: "Week",
      translatedWord: "Hafta",
    },
    {
      word: "Month",
      translatedWord: "Ay",
    },
    {
      word: "Year",
      translatedWord: "Yıl",
    },
    {
      word: "Time",
      translatedWord: "Zaman",
    },
    {
      word: "Friend",
      translatedWord: "Arkadaş",
    },
    {
      word: "Family",
      translatedWord: "Aile",
    },
    {
      word: "Love",
      translatedWord: "Aşk",
    },
    {
      word: "Happiness",
      translatedWord: "Mutluluk",
    },
  ],
};

export default WordPageConstants;
