import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, isRunning, start, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "In session" : "Paused"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
}

export default Timer;
