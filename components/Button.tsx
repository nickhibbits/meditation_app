import styles from "@/styles/components/Button.module.scss";
import Link from "next/link";

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
    <div
      className={`flex ${styles.button_component}`}
      style={{ justifyContent: `${justifyContent}` }}
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
    </div>
  );
}

export default Button;
