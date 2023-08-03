import Image from "next/image";

import ocean_1 from "@/public/images/ocean/ocean_1.jpg";
import jungle_1 from "@/public/images/jungle/jungle_3.jpg";
import mountains_1 from "@/public/images/mountains/mountains_1.jpg";

import styles from "@/styles/components/Background.module.scss";

function Background({
  children,
  imgSrc,
}: {
  children: any;
  imgSrc: "blob" | string;
}) {
  if (imgSrc === "blob") {
    return (
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
        {children}
      </>
    );
  } else if (imgSrc === "Ocean") {
    return (
      <>
        <Image
          src={ocean_1}
          className={styles.background_image}
          style={{ backgroundImage: `url(${ocean_1})` }}
          alt="ocean"
          width={1000}
          height={1000}
        />
        {children}
      </>
    );
  } else if (imgSrc === "Mountains") {
    return (
      <>
        <Image
          src={mountains_1}
          className={styles.background_image}
          style={{ backgroundImage: `url(${mountains_1})` }}
          alt="ocean"
          width={1000}
          height={1000}
        />
        {children}
      </>
    );
  } else {
    return (
      <>
        <Image
          src={jungle_1}
          className={styles.background_image}
          style={{ backgroundImage: `url(${jungle_1})` }}
          alt="ocean"
          width={1000}
          height={1000}
        />
        {children}
      </>
    );
  }
}

export default Background;
