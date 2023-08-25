import { useTimer } from "react-timer-hook";

import Button from "@/components/Button";

import styles from "@/styles/components/Timer.module.scss";

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const saveTime = async (mintues: number) => {
    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        minutes: minutes,
      }),
    }).then((res) => res.json());

    console.log("res", res);
  };

  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => saveTime(minutes),
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
