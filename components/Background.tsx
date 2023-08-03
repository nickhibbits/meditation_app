import Image from "next/image";

import ocean_1 from "@/public/images/ocean/ocean_2.jpg";
import jungle_1 from "@/public/images/jungle/jungle_3.jpg";
import mountains_1 from "@/public/images/mountains/mountains_1.jpg";

import styles from "@/styles/components/Background.module.scss";

function Background({
  children,
  imgSrc,
}: {
  children: any;
  imgSrc: string | null;
}) {
  if (imgSrc === null) {
    return <>{children}</>;
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
