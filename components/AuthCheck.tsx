import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function AuthCheck({ children }: { children: React.ReactNode }) {
  const session = await getServerSession().then((res) => res);

  if (!session) {
    redirect("/auth/signin");
  }
  return <>{children}</>;
}

export default AuthCheck;
