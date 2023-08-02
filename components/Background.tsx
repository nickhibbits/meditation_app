import Image from "next/image";

import styles from "@/styles/components/Background.module.scss";

function Background({
  children,
  imgSrc,
}: {
  children: any;
  imgSrc: "blob" | string;
}) {
  return (
    <>
      {imgSrc === "blob" ? (
        <>
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
        </>
      ) : (
        <div className={styles.background_image} />
      )}
      {children}
    </>
  );
}

export default Background;
