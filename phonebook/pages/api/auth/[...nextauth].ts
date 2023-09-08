/* #region [- import -] */
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import container, { TYPES } from "@/inversify.config";
import { IContactService } from "@/services/interfaces/IContactService";
import NextAuth from "next-auth";

/* #endregion */

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: "Credentials",
      credentials: {
      },
      async authorize(credentials, req) {
        //const { username, password } = credentials as any;
        const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
        var { data, status } = await contactService.login();
        if (status === 200 && data) {
          return data;
        } else {
          return null;
        }

      }
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.token = token.token;
      return session;
    },
  },


};

export default NextAuth(authOptions);