import AuthForm from "@/components/AuthForm";

async function SignIn() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"signin"} fetchUrl={"/api/auth/signin"} />
    </main>
  );
}

export default SignIn;
