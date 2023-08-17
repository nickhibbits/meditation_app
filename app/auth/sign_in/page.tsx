"use server";

import AuthForm from "@/components/AuthForm";
import { connnectToDb } from "@/lib/db";
import { handleCheckAuth } from "@/lib/utils/handleCheckAuth";

async function SignIn() {
  // await connect();

  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_in"} checkAuth={handleCheckAuth} />
    </main>
  );
}

// async function connect() {
//   const client = await connnectToDb().then((res) =>
//     console.log("🟢 connect res", res)
//   );

//   return client;
// }

export default SignIn;
