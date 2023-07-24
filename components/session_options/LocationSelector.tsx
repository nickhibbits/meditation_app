import styles from "@/styles/pages/SessionOptions.module.scss";

const options = ["Ocean", "Mountains", "Jungle"];

function LocationSelector({ update }: { update: (value: string) => void }) {
  return (
    <>
      {options.map((option, i) => {
        return (
          <li className={styles.option} key={i} onClick={(e) => update(option)}>
            {option}
          </li>
        );
      })}
    </>
  );
}

export default LocationSelector;
