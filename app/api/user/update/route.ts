import { connnectToDb } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const _req = await req.json();
  const { username, time: newTime } = _req;

  const client = await connnectToDb();

  const usersCollection = client?.db().collection("users");

  const user = await usersCollection?.findOne({
    username: username,
  });

  const userTotalTime = user?.totalTime;

  const updatedTime = !userTotalTime ? newTime : userTotalTime + newTime;

  // add updated time to user object
  // handle response
}
