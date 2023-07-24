import NavButton from "@/components/NavButton";
import SessionOption from "@/components/session_options/SessionOption";
import styles from "@/styles/pages/SessionOptions.module.scss";
import { relative } from "path";

const sessionOptions = ["Location", "Duration"];

function SessionOptions() {
  return (
    <main
      className="container flex flex_center flex_column"
      style={{ position: "relative" }}
    >
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
      <div className={`flex flex_row ${styles.nav_button_wrapper}`}>
        <NavButton url="/" text="Back" justifyContent="flex-start" />
        <NavButton url="/session" text="Start" justifyContent="flex-end" />
      </div>
    </main>
  );
}

export default SessionOptions;
