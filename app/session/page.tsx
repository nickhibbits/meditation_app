"use client";

import Timer from "@/components/Timer";
import { useSearchParams } from "next/navigation";

function Session() {
  const params = useSearchParams();
  const duration = params.get("duration");
  const location = params.get("locastion");

  console.log({ location, duration });

  const _duration = typeof duration === "string" ? Number(duration) : 0;

  const time = new Date();
  const expiryTimestamp = new Date(
    time.setSeconds(time.getSeconds() + _duration * 60)
  );

  return (
    <main className="container flex flex_column flex_center">
      <Timer expiryTimestamp={expiryTimestamp} />
    </main>
  );
}

export default Session;
