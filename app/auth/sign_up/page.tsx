import AuthForm from "@/components/AuthForm";

function SignUp() {
  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_up"} checkAuth={null} />
    </main>
  );
}

export default SignUp;
