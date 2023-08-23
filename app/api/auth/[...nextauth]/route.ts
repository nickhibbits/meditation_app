import { connnectToDb } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
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
            throw new Error("No user found!");
          }

          // compare passwords after enabling hashing
          const isValid = credentials.password === user?.password;

          if (!isValid) {
            client?.close();
            throw new Error("Could not verify user credentials");
          }

          console.log("user", user);
          client?.close();

          return { name: user.username };
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
