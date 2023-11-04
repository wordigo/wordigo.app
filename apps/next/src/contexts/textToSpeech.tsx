import { useTranslation } from "next-i18next";
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

const languages = {
  tr: "tr_TR",
  en: "en_US",
} as const;

interface TextToSpeechContextProps {
  textToSpeech: (word: string) => void;
  isSpeaking: boolean;
  spokenWord: string | null;
}

interface TextToSpeechProviderProps {
  children: ReactNode;
}

const TextToSpeechContext = createContext<TextToSpeechContextProps | null>(
  null
);

export const useTextToSpeech = (): TextToSpeechContextProps => {
  const context = useContext(TextToSpeechContext);
  if (!context) {
    throw new Error(
      "useTextToSpeech must be used within a TextToSpeechProvider"
    );
  }
  return context;
};

export const TextToSpeechProvider = ({
  children,
}: TextToSpeechProviderProps) => {
  const { i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [spokenWord, setSpokenWord] = useState<string | null>(null);
  const playerRef = useRef<HTMLAudioElement>(null);

  const textToSpeech = (word) => {
    setSpokenWord(word);
    const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${
      languages[i18n.language]
    }&q=${encodeURIComponent(word)}`;
    if (playerRef.current) {
      playerRef.current.src = computedUrl;
      void playerRef.current.play();
    }
  };

  const handlePlay = () => {
    setIsSpeaking(true);
  };

  const handleEnded = () => {
    setIsSpeaking(false);
  };

  return (
    <TextToSpeechContext.Provider
      value={{ textToSpeech, isSpeaking, spokenWord }}
    >
      {children}
      <audio ref={playerRef} onPlay={handlePlay} onEnded={handleEnded} />
    </TextToSpeechContext.Provider>
  );
};
