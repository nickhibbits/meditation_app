"use client";

import NavBar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { getSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [name, setName] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      console.log("session", session);
      if (!session) {
        console.log("no session, something went wrong");
        router.push("/");
      }

      setSession(session);
      setName(session?.user?.name);
    });
  }, []);

  return (
    <>
      <Providers session={session}>
        <>
          <NavBar user={name} />
          {children}
        </>
      </Providers>
    </>
  );
}

export default MainLayout;
