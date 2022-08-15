import styles from "./styles/components.module.css";
import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <a className={styles.styled_button}>{children}</a>
    </Link>
  );
}
