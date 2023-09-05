import Image from "next/image";

// import ocean_1 from "@/public/images/ocean/ocean_2.jpg";
import jungle_1 from "@/public/images/jungle/jungle_1-min.jpg";
import mountains_1 from "@/public/images/mountains/mountains_1.jpg";

import styles from "@/styles/components/Background.module.scss";
import Video from "@/components/Video";

function Background({ imgSrc }: { imgSrc: string | null }) {
  if (imgSrc === null) {
    return null;
  } else if (imgSrc === "Ocean") {
    return (
      // <Image
      //   src={ocean_1}
      //   className={styles.background_image}
      //   style={{ backgroundImage: `url(${ocean_1})` }}
      //   alt="ocean"
      //   width={1000}
      //   height={1000}
      // />
      <Video />
    );
  } else if (imgSrc === "Mountains") {
    return (
      <Image
        src={mountains_1}
        className={styles.background_image}
        style={{ backgroundImage: `url(${mountains_1})` }}
        alt="ocean"
        width={1000}
        height={1000}
      />
    );
  } else {
    return (
      <Image
        src={jungle_1}
        className={styles.background_image}
        style={{ backgroundImage: `url(${jungle_1})` }}
        alt="ocean"
        width={1000}
        height={1000}
      />
    );
  }
}

export default Background;
