"use client";

import { SessionProvider } from "next-auth/react";

function Providers({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Providers;
