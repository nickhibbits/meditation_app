"use server";

import LoginForm from "@/components/LoginForm";
import { handleCheckAuth } from "@/server/utils";

function Login() {
  return (
    <main className="container flex flex_column flex_center">
      <LoginForm checkAuth={handleCheckAuth} />
    </main>
  );
}

export default Login;
