// import { motion } from "framer-motion";
// import { enterAnimation } from "@/lib/animations";
import ocean_1 from "@/public/images/ocean/ocean_2.jpg";
import jungle_1 from "@/public/images/jungle/jungle_1-min.jpg";
import mountains_1 from "@/public/images/mountains/mountains_1.jpg";

import styles from "@/styles/pages/SessionOptions.module.scss";
import Image from "next/image";

const options = ["Ocean", "Mountains", "Jungle"];

function LocationSelector({ update }: { update: (value: string) => void }) {
  return (
    <>
      {options.map((option, i) => {
        switch (option) {
          case "Ocean":
            return (
              <div
                className={`flex flex_center${styles.option_image_wrapper}`}
                key={i}
              >
                {option}
                <Image
                  src={ocean_1}
                  className={styles.option_image}
                  alt="ocean"
                  width={100}
                  height={100}
                  onClick={() => update(option)}
                />
              </div>
            );

          case "Mountains":
            return (
              <div
                className={`flex flex_center${styles.option_image_wrapper}`}
                key={i}
              >
                {option}
                <Image
                  src={mountains_1}
                  className={styles.option_image}
                  alt="ocean"
                  width={100}
                  height={100}
                  onClick={() => update(option)}
                />
              </div>
            );

          case "Jungle":
            return (
              <div
                className={`flex flex_center${styles.option_image_wrapper}`}
                key={i}
              >
                {option}
                <Image
                  src={jungle_1}
                  className={styles.option_image}
                  alt="ocean"
                  width={100}
                  height={100}
                  onClick={() => update(option)}
                />
              </div>
            );
        }
      })}
    </>
  );
}

export default LocationSelector;
