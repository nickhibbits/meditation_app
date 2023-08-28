import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import NavBar from "@/components/Navbar";

async function MainLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession().then((res) => res);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <>
      <NavBar user={session?.user?.name} />
      {children}
    </>
  );
}

export default MainLayout;
