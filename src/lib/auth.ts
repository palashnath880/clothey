import { NextAuthOptions, RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<any> {
        const user = {
          email: credentials?.email || "",
          password: credentials?.password || "",
        };

        if (!user.email || !user.password) {
          throw new Error("Sorry! Something went wrong");
        }

        // get user by email
        const getUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!getUser) {
          // return the not found error message
          throw new Error("User Not Found");
        }

        // verify password
        if (await bcrypt.compare(user.password, getUser.password)) {
          return { ...getUser, password: null };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token?.user || undefined;
      return session;
    },
    async redirect({ baseUrl, url }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
  },
  //   jwt: {
  //     async decode({ secret, token }): Promise<any> {
  //       return await jwt.verify(token || "", secret);
  //     },
  //     encode({ secret, token }) {
  //       return jwt.sign(token || "", secret);
  //     },
  //   },
};
