export interface ILanguage {
  code: string;
  name: string;
  icon?: string;
}

export const SupportedLanguages: ILanguage[] = [
  {
    code: "EN",
    icon: "US",
    name: "English",
  },
  {
    code: "TR",
    icon: "TR",
    name: "Turkish",
  },
];

export const AllCountryLanguages: ILanguage[] = [
  { name: "English", icon: "US", code: "EN" },
  { name: "Turkish", icon: "TR", code: "TR" },
  { name: "Spanish", icon: "ES", code: "ES" },
  { name: "French", icon: "FR", code: "FR" },
  { name: "German", icon: "DE", code: "DE" },
  { name: "Italian", icon: "IT", code: "IT" },
  { name: "Portuguese", icon: "PT", code: "PT" },
  { name: "Russian", icon: "RU", code: "RU" },
  { name: "Chinese", icon: "CN", code: "ZH" },
  { name: "Japanese", icon: "JP", code: "JA" },
  { name: "Korean", icon: "KR", code: "KO" },
  { name: "Arabic", icon: "SA", code: "AR" },
  { name: "Dutch", icon: "NL", code: "NL" },
  { name: "Swedish", icon: "SE", code: "SV" },
  { name: "Greek", icon: "GR", code: "EL" },
  { name: "Polish", icon: "PL", code: "PL" },
  { name: "Danish", icon: "DK", code: "DA" },
  { name: "Finnish", icon: "FI", code: "FI" },
  { name: "Norwegian", icon: "NO", code: "NO" },
  { name: "Czech", icon: "CZ", code: "CS" },
  { name: "Hungarian", icon: "HU", code: "HU" },
  { name: "Romanian", icon: "RO", code: "RO" },
  { name: "Slovak", icon: "SK", code: "SK" },
  { name: "Bulgarian", icon: "BG", code: "BG" },
  { name: "Croatian", icon: "HR", code: "HR" },
  { name: "Ukrainian", icon: "UA", code: "UK" },
  { name: "Indonesian", icon: "ID", code: "ID" },
  { name: "Malay", icon: "MY", code: "MS" },
  { name: "Vietnamese", icon: "VN", code: "VI" },
  { name: "Thai", icon: "TH", code: "TH" },
  { name: "Hebrew", icon: "IL", code: "HE" },
  { name: "Hindi", icon: "IN", code: "HI" },
  { name: "Bengali", icon: "BD", code: "BN" },
  { name: "Tagalog", icon: "PH", code: "TL" },
];

export const WORDIGO_JWT_TOKEN_COOKIE = "wordigo_extension_token";
