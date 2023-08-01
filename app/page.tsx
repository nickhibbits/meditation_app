import Button from "@/components/Button";

import styles from "@/styles/pages/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`${styles.home_page} container flex flex_column flex_center`}
    >
      <Image
        src="/svg/blob_1.svg"
        alt="blob"
        className={styles.blob_1}
        height={800}
        width={800}
      />
      <Image
        src="/svg/blob_2.svg"
        alt="blob"
        className={styles.blob_2}
        height={700}
        width={700}
      />
      <Image
        src="/svg/blob_3.svg"
        alt="blob"
        className={styles.blob_3}
        height={400}
        width={400}
      />
      <Button
        text={"Start Session"}
        url={"/session_options"}
        justifyContent="center"
        onClick={null}
      />
    </main>
  );
}
