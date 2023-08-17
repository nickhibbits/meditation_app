"use client";

import { motion } from "framer-motion";
import { enterAnimation } from "@/lib/constants/animations";

import Link from "next/link";

import styles from "@/styles/components/Button.module.scss";

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
          type={type}
        >
          {text}
        </button>
      )}
    </motion.div>
  );
}

export default Button;
