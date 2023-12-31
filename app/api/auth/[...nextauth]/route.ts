import { connnectToDb } from "@/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const client = await connnectToDb();

          const usersCollection = client?.db().collection("users");

          const user = await usersCollection?.findOne({
            username: credentials.username,
          });

          if (!user) {
            client?.close();
            console.log("No user found!");
            return null;
          }

          // compare passwords after enabling hashing
          const isValid = credentials.password === user?.password;

          if (!isValid) {
            client?.close();
            console.log("Could not verify user credentials");
            return null;
          }

          console.log("user", user);
          client?.close();

          return { name: user.username };
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
