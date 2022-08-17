/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "./styles/components.module.css";

export default function LocaleSwitcher() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div tabIndex="0" className={styles.languages + " mr-4"}>
      <div className="flex gap-2">
        <div className="border-solid border-2 border-btnGreen px-1 gap-2 flex ">
          <Image
            src={`/${activeLocale}.png`}
            width="25"
            height={25}
            alt="flag"
          />
          <p className="">{activeLocale.toLocaleUpperCase()}▼</p>
        </div>
        <p
          tabIndex="1"
          className="border-solid border-2 text-txtGreen font-semibold border-btnGreen bg-btnGreen px-2"
        >
          {t("home:contact")}
        </p>
      </div>
      <div className={styles.languages_dropdown}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <div className={styles.lang_con}>
                  <a className="p-2 hover:bg-sky-700 ">
                    <div className="flex">
                      <Image
                        src={`/${locale}.png`}
                        width="25"
                        height={25}
                        alt="flag"
                      />
                      <p className="">{locale.toLocaleUpperCase()} ▼</p>
                    </div>
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
