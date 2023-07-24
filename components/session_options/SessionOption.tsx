import DurationSelector from "@/components/session_options/DurationSelector";
import LocationSelector from "@/components/session_options/LocationSelector";
import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOption({ title }: { title: string }) {
  return (
    <div className={`flex flex_center ${styles.session_option_component}`}>
      {title === "Location" ? (
        <div className={styles.location_selector_wrapper}>
          <div className={styles.middle_circle} />

          <LocationSelector />
        </div>
      ) : (
        <div className={styles.selector_wrapper}>
          <div className={styles.middle_circle}>
            <DurationSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default SessionOption;
