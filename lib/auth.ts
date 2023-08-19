import { connnectToDb } from "@/lib/db";

const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
}

export async function login(username: string, password: string) {
  "use server";

  const client = await connnectToDb();

  const db = client?.db();

  const result = await db?.collection; // run verification between user and password

  console.log("🟢 login response", result);
}
