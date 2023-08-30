import { connnectToDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const _req = await req.json();
  const { username, time: newTime } = _req;

  try {
    const client = await connnectToDb();

    const db = client?.db();
    const usersCollection = db?.collection("users");

    const user = await usersCollection?.findOne({
      username: username,
    });

    const userTotalTime = user?.time;

    const updatedTime = !userTotalTime ? newTime : userTotalTime + newTime;

    const res = await usersCollection?.updateOne(
      { username: user?.username },
      { $set: { time: updatedTime } },
      { upsert: false }
    );

    if (!res?.acknowledged) {
      throw new Error(`${res}`);
    }

    return NextResponse.json({
      status: 200,
      response: res,
    });
  } catch (error) {
    console.log("❌ ERROR", error);
    return NextResponse.json({
      status: 500,
      response: error,
    });
  }
}
