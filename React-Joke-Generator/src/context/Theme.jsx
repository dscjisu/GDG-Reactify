import { createContext, useEffect, useState } from "react";
import { DARK_THEME_LABEL, LIGHT_THEME_LABEL } from "../constants";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  // Initialize theme from localStorage or default to LIGHT_THEME_LABEL
  const [selectedTheme, setSelectedTheme] = useState(LIGHT_THEME_LABEL);

  // Toggle theme and update state and localStorage
  const handleThemeToggle = () => {
    setSelectedTheme((prevTheme) => {
      const newTheme =
        prevTheme === LIGHT_THEME_LABEL ? DARK_THEME_LABEL : LIGHT_THEME_LABEL;
      return newTheme;
    });
  };

  useEffect(() => {
    console.log(selectedTheme);
    const root = window.document.documentElement;
    if (selectedTheme === DARK_THEME_LABEL) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [selectedTheme]);

  const value = {
    selectedTheme,
    handleThemeToggle,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
