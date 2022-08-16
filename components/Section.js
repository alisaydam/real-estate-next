import { useTranslation } from "react-i18next";
import Button from "./Button";
import styles from "./styles/components.module.css";

export default function Section({ children, name, title, href }) {
  const { t } = useTranslation();

  return (
    <div className={styles.section_con}>
      <div className={styles.section_header}>
        <div className={styles.slogan}>
          <p className={styles.sec_name}>{name}</p>
          <h1 className={styles.sec_title}>{title}</h1>
        </div>
        <Button href={href}>{t("home:see_more")}</Button>
      </div>
      <div className={styles.section_gallery}>{children}</div>
    </div>
  );
}
