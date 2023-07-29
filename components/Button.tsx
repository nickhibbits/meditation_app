"use client";

import { motion } from "framer-motion";
import { enterAnimation } from "@/constants/animations";

import Link from "next/link";

import styles from "@/styles/components/Button.module.scss";

function Button({
  url,
  text,
  justifyContent,
  onClick,
}: {
  url: string;
  text: string;
  justifyContent: string;
  onClick: any;
}) {
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
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </motion.div>
  );
}

export default Button;
