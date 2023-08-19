import AuthForm from "@/components/AuthForm";
import { login } from "@/lib/auth";

async function SignIn() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_in"} submitHandler={login} />
    </main>
  );
}

export default SignIn;
