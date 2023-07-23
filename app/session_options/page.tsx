import SessionOption from "@/components/session_options/SessionOption";
import styles from "@/styles/pages/SessionOptions.module.scss";

const sessionOptions = ["Location", "Duration"];

function SessionOptions() {
  return (
    <main className="container flex flex_center">
      <div className={`flex flex_row ${styles.options_wrapper}`}>
        {sessionOptions.map((sessionOption, i) => {
          return <SessionOption title={sessionOption} key={i} />;
        })}
      </div>
    </main>
  );
}

export default SessionOptions;
