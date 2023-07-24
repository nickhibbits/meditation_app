"use client";
import NavButton from "@/components/NavButton";
import Options from "@/components/Options";

import styles from "@/styles/pages/SessionOptions.module.scss";
import { useEffect, useState } from "react";

function SessionOptions() {
  const [duration, setDuration] = useState("1");
  const [location, setLocation] = useState("");

  const updateDuration = (minutes: string) => {
    setDuration(minutes);
  };

  useEffect(() => {
    console.log("duration", duration);
  }, [duration]);

  return (
    <main
      className="container flex flex_center flex_column"
      style={{ position: "relative" }}
    >
      <Options updateDuration={updateDuration} updateLocation={setLocation} />
      <div className={`flex flex_row ${styles.nav_button_wrapper}`}>
        <NavButton url="/" text="Back" justifyContent="flex-start" />
        <NavButton
          url={`/session?duration=${duration}&location=${location}`}
          text="Start"
          justifyContent="flex-end"
        />
      </div>
    </main>
  );
}

export default SessionOptions;
