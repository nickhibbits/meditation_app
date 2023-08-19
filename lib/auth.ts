import { connnectToDb } from "@/lib/db";

const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
}

// Server Actions
// TODO -- Error handling
export async function createUser(username: string, password: string) {
  "use server";

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

export async function login(username: string, password: string) {
  "use server";

  const client = await connnectToDb();

  const db = client?.db();

  const result = await db?.collection; // run verification between user and password

  console.log("🟢 login response", result);
}
