import { connnectToDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("🟠 sign_up request", request);

  const data = request.body as any;
  const { username, password } = data;

  if (!username || !password || password.trim().length < 7) {
    return NextResponse.json({
      message:
        "Invalid input -- password should also be at least 7 characters long.",
    });
  }

  const client = await connnectToDb();

  const db = client?.db();

  db?.collection("users").insertOne({
    username: username,
    password: password,
  });

  return NextResponse.json({
    message: "User Successfully added",
  });
}
