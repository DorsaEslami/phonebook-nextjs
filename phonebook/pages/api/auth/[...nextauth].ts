/* #region [- import -] */
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import container, { TYPES } from "@/inversify.config";
import { IContactService } from "@/services/interfaces/IContactService";
import NextAuth from "next-auth";
import Notification from '../../../components/shared/notification/notification'

/* #endregion */

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: "Credentials",
      credentials: {
      },
      async authorize(credentials, req) {
        //const { username, password } = credentials as any;
        const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
        var user = await contactService.login();
        if (user.status === 200 && user.data) {
          return user.data;
        } else {
          return null;
        }

      }
    }),
  ],

  callbacks: {
    async jwt({ token, user, }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      var { user }: any = token;
      session.user.id = user.id;
      session.user.token = user.token;
      return session;
    },
  },


};

export default NextAuth(authOptions);