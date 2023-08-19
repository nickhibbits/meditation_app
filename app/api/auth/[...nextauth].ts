import { connnectToDb } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const client = await connnectToDb();

          const usersCollection = client?.db().collection("users");

          const user = await usersCollection?.findOne({
            username: credentials?.username,
          });

          if (!user) {
            throw new Error("No user found!");
          }

          // compare passwords after enabling hashing
          const isValid = credentials?.password === user?.password;

          if (!isValid) {
            client?.close();
            throw new Error("Could not verify user credentials");
          }

          client?.close();
          return { user: {user: user.username, id:  }};
        } catch (error) {
          console.log("ERROR", error);

          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);