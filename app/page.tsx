import Background from "@/components/Background";
import Button from "@/components/Button";

import styles from "@/styles/pages/Home.module.scss";

export default function Home() {
  return (
    <main
      className={`${styles.home_page} container flex flex_column flex_center`}
    >
      <Background imgSrc="blob">
        <Button
          text={"Start Session"}
          url={"/session_options"}
          justifyContent="center"
          onClick={null}
        />
      </Background>
    </main>
  );
}
