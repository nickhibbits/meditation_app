import { connnectToDb } from "@/lib/db";

const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
}

// Database Queries
export async function createUser(username: string, password: string) {
  if (!username || !password || password.trim().length < 7) {
    throw new Error(
      "Invalid input -- password should also be at least 7 characters long."
    );
  }

  const client = await connnectToDb();

  const db = client?.db();

  // const hashedPassword = hashPassword(password);

  const result = await db?.collection("users").insertOne({
    username: username,
    password: password,
    // password: hashedPassword
  });

  console.log("🟢 createUser response", result);
}
