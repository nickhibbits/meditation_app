"use server";

import LoginForm from "@/components/LoginForm";
import { connnectToDb } from "@/lib/db";
import { handleCheckAuth } from "@/lib/utils/handleCheckAuth";

async function Login() {
  await connect();

  return (
    <main className="container flex flex_column flex_center">
      <LoginForm checkAuth={handleCheckAuth} />
    </main>
  );
}

export async function connect() {
  const client = await connnectToDb().then((res) =>
    console.log("🟢 connect res", res)
  );

  return client;
}

export default Login;
