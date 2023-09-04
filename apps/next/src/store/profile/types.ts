import { type IResponse } from "types/global";

export interface RequestUpdateAvatarType {
  encodedAvatar: string;
}

export type ResponseUpdateAvatarType = IResponse<{ avatar_url: string }>;
