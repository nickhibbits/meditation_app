"use client";

import { useEffect, useState } from "react";

import Button from "@/components/Button";
import Options from "@/components/Options";
import Background from "@/components/Background";

import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOptions() {
  const [duration, setDuration] = useState("1");
  const [location, setLocation] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);

  const updateDuration = (minutes: string) => {
    setDuration(minutes);
  };

  const updateLocation = (location: string) => {
    setLocation(location);
    setBackground(location);
  };

  return (
    <main
      className="container flex flex_center flex_column"
      style={{ position: "relative" }}
    >
      <Background imgSrc={background}>
        <Options
          updateDuration={updateDuration}
          updateLocation={updateLocation}
        />
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
      </Background>
    </main>
  );
}

export default SessionOptions;
