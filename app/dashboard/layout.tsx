import { getServerSession } from "next-auth";

import AuthCheck from "@/components/AuthCheck";
import NavBar from "@/components/Navbar";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession().then((res) => res);
  return (
    <AuthCheck>
      <NavBar user={session?.user?.name} />
      {children}
    </AuthCheck>
  );
}

export default DashboardLayout;
