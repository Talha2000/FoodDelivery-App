import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";

const bcrypt = require("bcrypt");

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;

        if (!email || !password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null; // Return null when passwords do not match
          }
          return {
            id: user.id,
            name: user.name || "",
            email: user.email || "",
          };
        } catch (error) {
          console.log("Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // The expiry time for sessions, in seconds
    updateAge: 24 * 60 * 60, // How frequently to update the session, in seconds
  },
  callbacks: {
    // This callback is invoked whenever JWT is created or updated
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user id to the JWT token
      }
      return token;
    },

    // This callback is invoked whenever a session is checked
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name; // Assign only if defined
        session.user.email = token.email; // Assign only if defined
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
