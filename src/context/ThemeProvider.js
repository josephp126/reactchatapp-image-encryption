import { lightTheme, darkTheme } from "../assets/theme/theme";
import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [ThemeMode, setThemeMode] = useState(LocalTheme);
  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(
    (val) => {
      if (val === "light") {
        setThemeMode("light");
        window.localStorage.setItem("theme", "light");
      } else if (val === "dark") {
        setThemeMode("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
      }
    },
    [ThemeMode, setThemeMode]
  );

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
