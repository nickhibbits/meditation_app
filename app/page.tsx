"use client";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      console.log("session", session);
      if (!session) {
        router.push("/auth/signin");
      }

      setSession(session);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) <>Loading...</>;

  if (session) {
    router.push("/main");
  }
}
