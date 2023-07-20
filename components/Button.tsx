import styles from "@/styles/components/Button.module.scss";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

function Button({ text, link }: { text: string; link: Url }) {
  if (link) {
    return (
      <Link href={link} className={styles.button_component}>
        {text}
      </Link>
    );
  }

  return <div className={styles.button_component}>{text}</div>;
}

export default Button;
