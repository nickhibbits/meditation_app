"use client";

import { useSearchParams } from "next/navigation";

import Timer from "@/components/Timer";
import Button from "@/components/Button";
import Background from "@/components/Background";

function Session() {
  // Redirect if NOT auth

  const params = useSearchParams();
  const duration = params.get("duration");
  const location = params.get("location");

  const _duration = typeof duration === "string" ? Number(duration) : 0;

  const time = new Date();
  const expiryTimestamp = new Date(
    time.setSeconds(time.getSeconds() + _duration * 60)
  );

  return (
    <main className="container flex flex_column flex_center">
      <Background imgSrc={location} />
      <Timer expiryTimestamp={expiryTimestamp} />
      <Button
        url="/"
        text="Exit"
        justifyContent="center"
        onClick={null}
        type={"button"}
      />
    </main>
  );
}

export default Session;
