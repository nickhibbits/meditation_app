import styles from "@/styles/pages/SessionOptions.module.scss";

function LocationSelector() {
  return (
    <div className={styles.selector_component}>
      <ul className={styles.options_wrapper}>
        <li className={styles.option}>Ocean</li>
        <li className={styles.option}>Mountains</li>
        <li className={styles.option}>Jungle</li>
      </ul>
    </div>
  );
}

export default LocationSelector;
