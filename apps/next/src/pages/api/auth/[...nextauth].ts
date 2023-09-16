import { env } from "@/env.mjs";
import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common";
import cookie from "cookie";
import { type NextApiRequest, type NextApiResponse } from "next";
import NextAuth, { type NextAuthOptions, type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = (
  request: NextApiRequest,
  response: NextApiResponse
): NextAuthOptions => {
  return {
    callbacks: {
      async signIn({ user, account }) {
        try {
          if (account?.provider === "google") {
            const request = await fetch(
              `${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/auth/googleAuth?accessToken=${account.access_token}`
            );
            const profile = await request.json();

            if (!profile.success) {
              throw new Error(profile.message as string);
            }

            // @ts-ignore
            user.user = profile.data.user;
            user.accessToken = profile.data.token;

            return true;
          }

          if (account.provider === "credentials") {
            user.accessToken = user?.token;

            return true;
          }
        } catch (err) {
          throw new Error(err as string);
        }

        return false;
      },
      jwt({ token, user, trigger, session }) {
        if (trigger === "update") {
          token.user = session.user;
        }

        return { ...token, ...user };
      },
      session({ session, token, newSession, trigger, user }) {
        try {
          // const request = await fetch(
          //   `${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/users/getMe`,
          //   {
          //     headers: {
          //       authorization: "Bearer " + token.accessToken,
          //     },
          //   }
          // );

          // const profile = await request.json();

          response.setHeader(
            "Set-Cookie",
            cookie.serialize(
              WORDIGO_JWT_TOKEN_COOKIE,
              token.accessToken as string,
              {
                maxAge: 60 * 60 * 24,
                path: "/",
              }
            )
          );

          // @ts-ignore
          session.user = { accessToken: token.accessToken, ...token.user };

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
          language: { type: "text" },
        },
        authorize: async (credentials) => {
          if (!credentials) throw new Error("no credentials");

          try {
            const { email, password, language } = credentials;

            const bffRequest = await fetch(
              `${env.NEXT_PUBLIC_WORDIGO_BACKEND_URL}/auth/signIn`,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Accept-Language": language,
                },
                method: "POST",
                body: JSON.stringify({ email, password }),
              }
            );
            const response = await bffRequest.json();

            if (response?.data?.user) {
              return {
                user: response.data.user as User,
                token: response.data.accessToken,
              } as any;
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
      newUser: "/auth/signup",
      signOut: "/",
      error: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
    events: {
      signOut() {
        const cookieSerialized = cookie.serialize(
          WORDIGO_JWT_TOKEN_COOKIE,
          "",
          {
            maxAge: 0,
            path: "/",
          }
        );

        response.setHeader("Set-Cookie", cookieSerialized);
      },
    },
    session: {
      strategy: "jwt",
      maxAge: 60 * 60 * 24,
    },
    jwt: {
      maxAge: 60 * 60 * 24,
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res));
};
