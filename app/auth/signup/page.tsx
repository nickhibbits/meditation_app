import AuthForm from "@/components/AuthForm";

function SignUp() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"signup"} />
    </main>
  );
}

export default SignUp;
