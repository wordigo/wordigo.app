import NextAuth from "next-auth";

export interface LoggedInUser {
  accessToken?: string;
  avatar_url: string;
  createdDate: string;
  email: string;
  id: string;
  name: string;
  nativeLanguage: string;
  passwordHash: string;
  passwordSalt: string;
  provider: "local" | "google";
  surname: string;
  targetLanguage: string;
  updatedDate: string;
  username: string;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: LoggedInUser;
  }
  interface User {
    token: string;
    accessToken: string;
  }
}
