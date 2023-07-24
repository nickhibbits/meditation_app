import SessionOption from "@/components/session_options/SessionOption";
import styles from "@/styles/pages/SessionOptions.module.scss";

const sessionOptions = ["Location", "Duration"];

function SessionOptions() {
  return (
    <main className="container flex flex_center">
      <div className={`flex ${styles.options_wrapper}`}>
        {sessionOptions.map((sessionOption, i) => {
          return (
            <div className={`flex ${styles.session_option_wrapper}`}>
              <h1>{sessionOption}</h1>
              <SessionOption title={sessionOption} key={i} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default SessionOptions;
