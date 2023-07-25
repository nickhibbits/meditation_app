import styles from "@/styles/components/Button.module.scss";
import Link from "next/link";

function Button({
  url,
  text,
  justifyContent,
}: {
  url: string;
  text: string;
  justifyContent: string;
}) {
  return (
    <div
      className={`flex ${styles.button_component}`}
      style={{ justifyContent: `${justifyContent}` }}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
}

export default Button;
