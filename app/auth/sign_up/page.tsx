import AuthForm from "@/components/AuthForm";
import { createUser } from "@/lib/auth";
import { connnectToDb } from "@/lib/db";

async function handleSubmit({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  "use server";

  console.log("⭐️ HERE");

  // const res = await createUser(username, password);
  if (!username || !password || password.trim().length < 7) {
    throw new Error(
      "Invalid input -- password should also be at least 7 characters long."
    );
  }

  const client = await connnectToDb();

  const db = client?.db();

  // const hashedPassword = hashPassword(password);

  const result = db?.collection("users").insertOne({
    username: username,
    password: password,
    // password: hashedPassword
  });

  console.log("🟢 createUser response", result);
}

function SignUp() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_up"} submitHandler={handleSubmit} />
    </main>
  );
}

export default SignUp;
