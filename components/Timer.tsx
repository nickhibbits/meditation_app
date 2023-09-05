import { useTimer } from "react-timer-hook";
import { useSession } from "next-auth/react";

import Button from "@/components/Button";

import styles from "@/styles/components/Timer.module.scss";
import { useRouter } from "next/navigation";

function Timer({
  expiryTimestamp,
  duration,
}: {
  expiryTimestamp: Date;
  duration: number;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  const saveTime = async (time: number) => {
    router.push("/");

    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: session?.user?.name,
        time: time,
      }),
    }).then((res) => res.json());

    if (res.status !== 200) {
      alert(res.response);
    }

    // if time update successful, display total time meditated, then return to home screen
    // create toast for errors, harmonize error handling here and in auth flow
  };

  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: () => saveTime(duration),
  });

  return (
    <div style={{ textAlign: "center", zIndex: "2" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes < 1 ? null : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <p>{isRunning ? "In session" : "Paused"}</p>
      <div className={`flex ${styles.buttons_wrapper}`}>
        <Button
          text="Pause"
          url={""}
          onClick={pause}
          justifyContent="center"
          type={"button"}
        />
        <Button
          text="Start"
          url={""}
          onClick={resume}
          justifyContent="center"
          type={"button"}
        />
      </div>
    </div>
  );
}

export default Timer;
