import { motion } from "framer-motion";

import DurationSelector from "@/components/session_options/DurationSelector";
import LocationSelector from "@/components/session_options/LocationSelector";

import styles from "@/styles/pages/SessionOptions.module.scss";
import { enterAnimation, spinAnimation } from "@/constants/animations";

function SessionOption({
  title,
  updateDuration,
  updateLocation,
}: {
  title: string;
  updateDuration: (value: string) => void;
  updateLocation: (value: string) => void;
}) {
  return (
    <div className={`flex flex_center ${styles.session_option_component}`}>
      {title === "Location" ? (
        <div className={styles.location_selector_wrapper}>
          <motion.div
            className={styles.middle_circle}
            animate={{ ...enterAnimation.animate, ...spinAnimation.animate }}
            transition={enterAnimation.transition}
          >
            <LocationSelector update={updateLocation} />
          </motion.div>
        </div>
      ) : (
        <div className={styles.selector_wrapper}>
          <div className={styles.middle_circle}>
            <DurationSelector update={updateDuration} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SessionOption;
