import DurationSelector from "@/components/session_options/DurationSelector";
import LocationSelector from "@/components/session_options/LocationSelector";

import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOptions() {
  return (
    <main className="container flex flex_center">
      <div className={`flex flex_row ${styles.options_wrapper}`}>
        <LocationSelector />
        <DurationSelector />
      </div>
    </main>
  );
}

export default SessionOptions;
