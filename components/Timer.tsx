import { useTimer } from "react-timer-hook";

import Button from "@/components/Button";

import styles from "@/styles/components/Timer.module.scss";

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      autoStart: false,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <div style={{ textAlign: "center", zIndex: "2" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes < 1 ? null : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <p>{isRunning ? "In session" : "Paused"}</p>
      <div className={`flex ${styles.buttons_wrapper}`}>
        <Button text="Pause" url={""} onClick={pause} justifyContent="center" />
        <Button
          text="Start"
          url={""}
          onClick={resume}
          justifyContent="center"
        />
      </div>
    </div>
  );
}

export default Timer;
