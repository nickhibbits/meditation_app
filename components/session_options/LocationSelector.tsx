import styles from "@/styles/pages/SessionOptions.module.scss";

function LocationSelector() {
  return (
    <div className={`flex flex_center ${styles.selector_component}`}>
      {/* <div className={styles.middle_circle}> o </div> */}
      <div className={styles.middle_circle} />
      <li className={styles.option}>Ocean</li>
      <li className={styles.option}>Mountains</li>
      <li className={styles.option}>Jungle</li>
    </div>
  );
}

export default LocationSelector;
