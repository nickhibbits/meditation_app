import { connnectToDb } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession().then((res) => res);

  const _user = session?.user?.name;

  try {
    const client = await connnectToDb();

    const db = client?.db();
    const usersCollection = db?.collection("users");

    const user = await usersCollection?.findOne({
      username: _user,
    });

    console.log("✅ user", user);

    if (!user) {
      throw new Error("auth check wrong");
    }

    return NextResponse.json({
      status: 200,
      response: user.time,
    });
  } catch (error) {
    console.log("❌ ERROR", error);
    return NextResponse.json({
      status: 500,
      response: error,
    });
  }
}
