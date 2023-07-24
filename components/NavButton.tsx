import Link from "next/link";
import styles from "@/styles/components/NavButton.module.scss";

function NavButton({
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
      className={`flex ${styles.nav_button_component}`}
      style={{ justifyContent: `${justifyContent}` }}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
}

export default NavButton;
