export interface ISettingsTab {
  name: string;
  value: string;
}

export const SettingsTabs: ISettingsTab[] = [
  {
    name: "profileSettings.title",
    value: "profile",
  },
  {
    name: "accountSettings.title",
    value: "account",
  },
  {
    name: "appearanceSettings.title",
    value: "appearance",
  },
];
