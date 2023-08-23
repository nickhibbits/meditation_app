import AuthForm from "@/components/AuthForm";

function SignIn() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"signin"} />
    </main>
  );
}

export default SignIn;
