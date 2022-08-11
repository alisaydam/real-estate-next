// components/ThemeToggle.js
import { useState, useEffect } from "react";

const ThemeToggle = ({ isDark }) => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
    isDark(inactiveTheme);
  }, [activeTheme, inactiveTheme, isDark]);
  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === "dark" ? (
        <span className={"dwdaw"}> {activeTheme === "dark" && "🌙"}</span>
      ) : (
        <span className={"dwdaw"}> {activeTheme === "light" && "☀️"}</span>
      )}
    </a>
  );
};

export default ThemeToggle;
