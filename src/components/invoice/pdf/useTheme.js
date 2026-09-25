import { useContext } from "react";
import { ThemeContext } from "./themeContext.js";
import { getPdfTheme } from "../data/themePresets.js";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context || getPdfTheme("light");
};
