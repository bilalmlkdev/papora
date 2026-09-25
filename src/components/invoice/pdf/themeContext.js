import { createContext } from "react";
import { getPdfTheme } from "../data/themePresets.js";

export const ThemeContext = createContext(getPdfTheme("light"));
