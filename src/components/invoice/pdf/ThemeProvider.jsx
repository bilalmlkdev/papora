import React from "react";
import { getPdfTheme } from "../data/themePresets.js";
import { ThemeContext } from "./themeContext.js";

export const ThemeProvider = ({ theme = "light", children }) => {
  const themeStyles = getPdfTheme(theme);
  return (
    <ThemeContext.Provider value={themeStyles}>{children}</ThemeContext.Provider>
  );
};
