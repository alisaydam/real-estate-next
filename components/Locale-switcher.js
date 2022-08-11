/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/components.module.css";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div tabIndex="0" className={styles.languages}>
      <div className={styles.lang_con}>
        <img src={`/${activeLocale}.png`} alt="counrty flag" />{" "}
      </div>
      <div className={styles.languages_dropdown}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <div className={styles.lang_con}>
                  <img src={`/${locale}.png`} alt="counrty flag" />{" "}
                  {/* <a>{locale.toLocaleUpperCase()}</a> */}
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
