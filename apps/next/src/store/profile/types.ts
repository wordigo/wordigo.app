import { type IResponse } from "types/global";

export interface RequestUpdateAvatarType {
  encodedAvatar: string;
}

export type ResponseUpdateAvatarType = IResponse<{ avatar_url: string }>;

export type ResponseStatisticsType = IResponse<{
  numberOfDictionaries: number;
  numberOfPublicDics: number;
  numberOfSubbedDics: number;
  numberOfWords: number;
}>;

export type RequestUpdateProfileType = IResponse<{
  name: string;
  username: string;
}>;
