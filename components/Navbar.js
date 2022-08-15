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

export default function Navbar({ navRef }) {
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
      <Link href="/">
        <div className="flex justify-between w-2/12 cursor-pointer ">
          <picture>
            <img
              style={{ minWidth: "15rem" }}
              className="min-w-ful"
              src={activeTheme === "dark" ? "/logo.png" : "/logo-w.png"}
              alt="romis real estate"
            />
          </picture>
        </div>
      </Link>
      <div className={styles.nav_list_wrap + "  hidden space-x-6 md:flex"}>
        <ul className={styles.nav_list}>
          <li className={styles.list_item} style={asPath === "/" ? style : {}}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={styles.list_item}
            style={asPath === "/properties" ? style : {}}
          >
            <Link href="/properties">
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
          <li className={styles.list_item}></li>
        </ul>
      </div>
      <div>
        <ul className={styles.nav_list + " relative"}>
          <div
            className={styles.list_item + " flex items-center justify-center"}
          >
            <ThemeToggle isDark={isDark} />
          </div>
          <div className="flex items-center jusify-center">
            <LocaleSwitcher />
          </div>

          <div className={`${styles.nav_container} md:hidden`}>
            <button
              tabIndex="0"
              className={`${styles.toggle_button} flex items-center text-clrText p-5`}
            >
              <svg
                className="h-12 w-12 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <div className="flex flex-col absolute -bottom-24 z-40 md:hiddens">
              <div
                tabIndex="0"
                className={`${styles.nav_content} top-0 w-[35vw] bg-clrBG  p-10 fixed h-full  ease-in-out duration-500 mt-28 right-0 translate-x-0`}
              >
                <ul className="flex flex-col gap-8">
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/" ? style : {}}
                  >
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/post" ? style : {}}
                  >
                    <Link href="/properties">
                      <a>Properties</a>
                    </Link>
                  </li>
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/about" ? style : {}}
                  >
                    <Link href="/post">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/statemang" ? style : {}}
                  >
                    <Link href="/statemang">
                      <a>Romis TV</a>
                    </Link>
                  </li>
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/post" ? style : {}}
                  >
                    <Link href="/api-hit">
                      <a>Romis Card</a>
                    </Link>
                  </li>
                  <li
                    className={styles.list_item_side}
                    style={asPath === "/post" ? style : {}}
                  >
                    <Link href="/api-hit">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li className={styles.list_item_side}></li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
