import { connnectToDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  const client = await connnectToDb();

  const db = client?.db();

  const res = await fetch("https://data.mongodb-api.com/...", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
