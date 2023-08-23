"use client";

import Background from "@/components/Background";
import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  console.log(
    "🔴 TODO",
    "research how to check session on server -- getServerSideProps(context) not available in app folder, but server actions dont give access to a request or context object needed for getSession(req)"
  );

  useEffect(() => {
    getSession().then((session) => {
      console.log("session", session);
      if (!session) {
        router.push("/auth/signin");
      }

      setIsLoading(false);
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
