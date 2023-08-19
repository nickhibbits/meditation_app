import { connnectToDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let response;
  console.log("👻");

  const data = await req.json();
  console.log("body", data);

  const { username, password } = data;

  try {
    if (!username || !password) {
      throw new Error("Include both a username and password to sign in.");
    }

    const client = await connnectToDb();

    const db = client?.db();

    const user = await db?.collection("users").findOne({ username: username });

    if (!user) {
      throw new Error("can't find existing user");
    }

    if (user.password !== password) {
      throw new Error("Incorrect password, try again");
    }

    response = {
      status: 200,
      message: `User ${username} successfully created.`,
      data: user,
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
