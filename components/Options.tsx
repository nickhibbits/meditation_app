"use client";

import SessionOption from "@/components/session_options/SessionOption";

import styles from "@/styles/pages/SessionOptions.module.scss";

const sessionOptions = ["Location", "Duration"];

function Options({
  updateDuration,
  updateLocation,
}: {
  updateDuration: (value: string) => void;
  updateLocation: (value: string) => void;
}) {
  return (
    <div className={`flex ${styles.options_wrapper}`}>
      {sessionOptions.map((sessionOption, i) => {
        return (
          <div className={`flex ${styles.session_option_wrapper}`} key={i}>
            <h1>{sessionOption}</h1>
            <SessionOption
              updateDuration={updateDuration}
              updateLocation={updateLocation}
              title={sessionOption}
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Options;
