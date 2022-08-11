import styles from "./styles/components.module.css";

export default function Button({ children }) {
  return <button className={styles.styled_button}>{children}</button>;
}
