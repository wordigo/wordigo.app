import { env } from "@/env.mjs";
import { type AuthLoginValues } from "@/pages/auth/signin/signin-form";
import NextAuth, { type NextAuthOptions, type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "google") {
          const request = await fetch(`${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/auth/googleAuth?accessToken=${account.access_token}`);
          const profile = await request.json();

          // @ts-ignore
          user.accessToken = profile.data;
          return true;
        }

        if (account.provider === "credentials") {
          // @ts-ignore
          user.accessToken = user?.token;
          return true;
        }
      } catch (err) {
        throw new Error(err as string);
      }

      return false;
    },
    jwt({ token, user }) {
      return { ...token, ...user, encrypted: false };
    },
    async session({ session, token }) {
      try {
        const request = await fetch(`${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/users/getUserMe`, {
          headers: {
            authorization: "Bearer " + token.accessToken,
          },
        });

        const profile = await request.json();
        session.user = { accessToken: token.accessToken, ...profile.data };

        return session;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH2_ID,
      clientSecret: process.env.GOOGLE_OAUTH2_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("ee test");
        if (!credentials) throw new Error("no credentials");

        try {
          const { email, password } = credentials as AuthLoginValues;

          const request = await fetch(`${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/auth/signIn`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
          });
          const response = await request.json();

          if (response?.data?.user) {
            return { user: response.data.user as User, token: response.data.accessToken } as any;
          } else {
            throw new Error(response.message as string);
          }
        } catch (err) {
          throw new Error(err.message as string);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
