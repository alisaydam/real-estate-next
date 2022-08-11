/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles/components.module.css";
import LocaleSwitcher from "./Locale-switcher";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../lib/state";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export default function Navbar() {
  const { setTheme } = useContext(AppContext);

  const router = useRouter();
  const [activeTheme, setActiveTheme] = useState("");
  const { locale, locales, defaultLocale, asPath, pathName } = router;
  useEffect(() => {
    sessionStorage.setItem("page", asPath);
  }, [asPath]);

  function isDark(value) {
    setActiveTheme(value);
    setTheme(value);
  }

  const style = {
    color: "gray",
  };
  return (
    <div className={styles.nav_wrap}>
      <div className="flex justify-between w-2/12  ">
        <picture>
          <img
            src={activeTheme === "dark" ? "/logo.png" : "/logo-w.png"}
            alt="romis real estate"
          />
        </picture>
      </div>
      <div className={styles.nav_list_wrap}>
        <ul className={styles.nav_list}>
          <li className={styles.list_item} style={asPath === "/" ? style : {}}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/post" ? style : {}}
          >
            <Link href="/post">
              <a>Properties</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/about" ? style : {}}
          >
            <Link href="/post">
              <a>Blogs</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/statemang" ? style : {}}
          >
            <Link href="/statemang">
              <a>Romis TV</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/post" ? style : {}}
          >
            <Link href="/api-hit">
              <a>Romis Card</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/post" ? style : {}}
          >
            <Link href="/api-hit">
              <a>About Us</a>
            </Link>
          </li>
          <li className={styles.list_item}>
            <ThemeToggle isDark={isDark} />
          </li>
        </ul>
      </div>
      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
