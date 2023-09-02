"use client";

import { motion } from "framer-motion";
import { enterAnimation } from "@/lib/animations";

import Link from "next/link";

import styles from "@/styles/components/Button.module.scss";
import { useState } from "react";
import Loader from "@/components/Loader";

function Button({
  url,
  text,
  justifyContent,
  onClick,
  type,
}: {
  url: string;
  text: string;
  justifyContent: string;
  onClick: any;
  type: any;
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    setClicked(true);
  };
  if (!clicked) {
    return (
      <motion.div
        className={`flex ${styles.button_component}`}
        style={{ justifyContent: `${justifyContent}` }}
        animate={enterAnimation.animate}
        transition={enterAnimation.transition}
      >
        {url ? (
          <Link className={`flex flex_center ${styles.button}`} href={url}>
            {text}
          </Link>
        ) : (
          <button
            className={`flex flex_center ${styles.button}`}
            onClick={() => handleClick()}
            type={type}
          >
            {text}
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className={`flex flex_center ${styles.button_component_loading}`}>
      <Loader />
    </div>
  );
}

export default Button;
