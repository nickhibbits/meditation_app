import styles from "@/styles/pages/SessionOptions.module.scss";

const options = ["Ocean", "Mountains", "Jungle"];

function LocationSelector() {
  return (
    <>
      {options.map((option, i) => {
        return (
          <li className={styles.option} key={i}>
            {option}
          </li>
        );
      })}
    </>
  );
}

export default LocationSelector;
