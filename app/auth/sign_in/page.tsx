import AuthForm from "@/components/AuthForm";

async function SignIn() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_in"} fetchUrl={"/api/auth/sign_in"} />
    </main>
  );
}

export default SignIn;
