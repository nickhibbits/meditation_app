"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import Button from "@/components/Button";
import Options from "@/components/Options";
import Background from "@/components/Background";

import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOptions() {
  const [duration, setDuration] = useState("1");
  const [location, setLocation] = useState<string | null>(null);

  const handleUpdateDuration = (minutes: string) => {
    setDuration(minutes);
  };

  const handleUpdateLocation = (location: string) => {
    setLocation(location);
  };

  return (
    <main
      className="container flex flex_center flex_column"
      style={{ position: "relative" }}
    >
      <Background imgSrc={location} />
      <div className={styles.option_container}>
        <Options
          updateDuration={handleUpdateDuration}
          updateLocation={handleUpdateLocation}
        />
        <div className={`flex flex_row ${styles.nav_button_wrapper}`}>
          <Button
            url="/"
            text="Back"
            justifyContent="flex-start"
            onClick={null}
            type={"button"}
          />
          <Button
            url={`/session/start?duration=${duration}&location=${location}`}
            text="Start"
            justifyContent="flex-end"
            onClick={null}
            type={"button"}
          />
        </div>
      </div>
    </main>
  );
}

export default SessionOptions;
