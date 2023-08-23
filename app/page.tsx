"use client";

import Background from "@/components/Background";
import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      console.log("session", session);
      if (!session) {
        router.push("/auth/signin");
      }
    });
  }, []);

  return (
    <main className="container flex flex_column flex_center">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {" "}
          <Background imgSrc={null} />
          <Button
            text={"Start Session"}
            url={"/session_options"}
            justifyContent="center"
            onClick={null}
            type={"button"}
          />
        </>
      )}
    </main>
  );
}
