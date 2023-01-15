
import React, { useEffect, useState } from "react";
import Layout from "./layout";

export default function ToggleTheme({ children }) {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme === undefined ? "dark" : theme);

    localStorage.setItem("theme", theme === undefined ? "dark" : theme);
    setLoading(false);
  }, [colorTheme, theme]);

  return (
    <>
      {!loading && (
        <Layout toggleTheme={toggleDarkMode} theme={theme}>
          children
        </Layout>
      )}
    </>
  );
}
