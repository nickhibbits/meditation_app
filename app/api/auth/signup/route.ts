import { connnectToDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let response;
  console.log("⭐️");

  const data = await req.json();
  console.log("body", data);

  const { username, password } = data;

  try {
    if (!username || !password || password.trim().length < 7) {
      throw new Error(
        "Invalid input -- password should also be at least 7 characters long."
      );
    }

    const client = await connnectToDb();

    const db = client?.db();

    const existingUser = await db
      ?.collection("users")
      .findOne({ username: username });

    if (existingUser) {
      throw new Error("User already exists.");
    }

    // TODO encrypt password with hash utility function
    const result = await db?.collection("users").insertOne({
      username: username,
      password: password,
    });

    response = {
      status: 200,
      message: `User ${username} successfully created.`,
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.log("❌ ERROR", error);

    const response = {
      status: 500,
      message: error.message,
      data: null,
    };

    return NextResponse.json(response);
  }
}
