import { connnectToDb } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("🫀 authorize");
        console.log("credentials", credentials);

        try {
          const client = await connnectToDb();

          const usersCollection = client?.db().collection("users");

          const user = await usersCollection?.findOne({
            username: credentials?.username,
          });

          if (!user) {
            client?.close();
            throw new Error("No user found!");
          }

          // compare passwords after enabling hashing
          const isValid = credentials?.password === user?.password;

          if (!isValid) {
            client?.close();
            throw new Error("Could not verify user credentials");
          }

          client?.close();
          return { user: user.username };
        } catch (error) {
          console.log("❌ ERROR", error);

          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };