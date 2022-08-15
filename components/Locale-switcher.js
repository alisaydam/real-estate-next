/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/components.module.css";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div tabIndex="0" className={styles.languages + " mr-4"}>
      <div className="flex gap-2">
        <p className="border-solid border-2 border-btnGreen px-2 w-32">
          {activeLocale.toLocaleUpperCase()} ⮟
        </p>
        <p
          tabIndex="1"
          className="border-solid border-2 text-txtGreen font-semibold border-btnGreen bg-btnGreen px-2"
        >
          CONTACT
        </p>
      </div>
      <div className={styles.languages_dropdown}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <div className={styles.lang_con}>
                  <a className="p-2 hover:bg-sky-700 px-10">
                    {locale.toLocaleUpperCase()}
                  </a>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
