import { NextResponse } from "next/server";

export async function POST() {
  const url = ""; // db path

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "API-Key": process.env.DATA_API_KEY || "", // Provide a default value if DATA_API_KEY is undefined
  };

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
