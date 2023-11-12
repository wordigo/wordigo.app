export interface ISettingsTab {
  name: string;
  value: string;
}

export const SettingsTabs: ISettingsTab[] = [
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Account",
    value: "account",
  },
  {
    name: "Appearance",
    value: "appearance",
  },
];
