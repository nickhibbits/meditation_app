"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Options from "@/components/Options";

import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOptions() {
  const [duration, setDuration] = useState("1");
  const [location, setLocation] = useState("");

  const updateDuration = (minutes: string) => {
    setDuration(minutes);
  };

  return (
    <main
      className="container flex flex_center flex_column"
      style={{ position: "relative" }}
    >
      <Options updateDuration={updateDuration} updateLocation={setLocation} />
      <div className={`flex flex_row ${styles.nav_button_wrapper}`}>
        <Button
          url="/"
          text="Back"
          justifyContent="flex-start"
          onClick={null}
        />
        <Button
          url={`/session?duration=${duration}&location=${location}`}
          text="Start"
          justifyContent="flex-end"
          onClick={null}
        />
      </div>
    </main>
  );
}

export default SessionOptions;
