import { motion } from "framer-motion";
import { enterAnimation, spinAnimation } from "@/lib/animations";

import DurationSelector from "@/components/session_options/DurationSelector";
import LocationSelector from "@/components/session_options/LocationSelector";

import styles from "@/styles/pages/SessionOptions.module.scss";

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
          <LocationSelector update={updateLocation} />
        </div>
      ) : (
        <div className={styles.selector_wrapper}>
          <DurationSelector update={updateDuration} />
        </div>
      )}
    </div>
  );
}

export default SessionOption;
