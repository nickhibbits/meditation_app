// import { createUser } from "@/lib/auth";

import AuthForm from "@/components/AuthForm";

function SignUp() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_up"} fetchUrl={"/api/auth/signup"} />
    </main>
  );
}

export default SignUp;
