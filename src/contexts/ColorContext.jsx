import React from "react";

export const themes = {
  light: {
    background: "bg-red-900",
  },
  dark: {
    background: "bg-green-900",
  },
  default: {
    background: "bg-[#121212]",
  },
};

export const ThemeContext = React.createContext(themes.default);
