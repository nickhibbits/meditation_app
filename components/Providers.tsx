"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

function Providers({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("session updated", session);
  }, [session]);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Providers;
