import { createUser } from "@/lib/auth";

import AuthForm from "@/components/AuthForm";

async function handleSubmit({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  "use server";

  createUser(username, password);
}

function SignUp() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_up"} submitHandler={handleSubmit} />
    </main>
  );
}

export default SignUp;
