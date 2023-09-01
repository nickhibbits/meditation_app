import styles from "@/styles/components/DurationSelector.module.scss";

function DurationSelector({ update }: { update: (value: any) => void }) {
  return (
    <div className={styles.range_slider}>
      <span className={styles.rs_label}>0</span>
      <input
        className={styles.rs_range}
        type="range"
        value="0"
        min="0"
        max="200"
      />
    </div>
  );
}

export default DurationSelector;
