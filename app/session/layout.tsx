import AuthCheck from "@/components/AuthCheck";

async function SessionLayout({ children }: { children: React.ReactNode }) {
  return <AuthCheck>{children}</AuthCheck>;
}

export default SessionLayout;
