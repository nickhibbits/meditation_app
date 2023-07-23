import DurationSelector from "@/components/session_options/DurationSelector";
import LocationSelector from "@/components/session_options/LocationSelector";
import styles from "@/styles/pages/SessionOptions.module.scss";

function SessionOption({ title }: { title: string }) {
  return (
    <div className={`flex flex_center ${styles.selector_component}`}>
      {title === "Location" ? (
        <>
          <div className={styles.middle_circle} />
          <LocationSelector />
        </>
      ) : (
        <div className={styles.middle_circle}>
          <DurationSelector />
        </div>
      )}
    </div>
  );
}

export default SessionOption;
