import { motion } from "framer-motion";
import { enterAnimation } from "@/constants/animations";

import styles from "@/styles/pages/SessionOptions.module.scss";

const options = ["Ocean", "Mountains", "Jungle"];

function LocationSelector({ update }: { update: (value: string) => void }) {
  return (
    <>
      {options.map((option, i) => {
        return (
          <motion.li
            animate={{ width: [50, i === 1 ? 201 : 179] }}
            transition={enterAnimation.transition}
            className={styles.option}
            key={i}
            onClick={(e) => update(option)}
          >
            {option}
          </motion.li>
        );
      })}
    </>
  );
}

export default LocationSelector;
