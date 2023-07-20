import styles from "@/styles/components/Button.module.scss";

function Button({ text }: { text: string }) {
  return <div className={styles.button_component}>{text}</div>;
}

export default Button;
