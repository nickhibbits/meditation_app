"use client";

import { useRef } from "react";

import styles from "@/styles/components/DurationSelector.module.scss";

function DurationSelector({ update }: { update: (value: any) => void }) {
  const timeRef = useRef();

  function handleChange() {
    console.log("timeRef", timeRef.current?.value);
    update(timeRef.current?.value);
  }
  return (
    <div className={styles.range_slider}>
      <span className={styles.rs_label}>
        {!timeRef.current ? 1 : timeRef.current?.value}
      </span>
      <input
        className={styles.rs_range}
        type="range"
        defaultValue="1"
        min="1"
        max="60"
        onChange={handleChange}
        ref={timeRef}
      />
    </div>
  );
}

export default DurationSelector;
