// import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "./ThemeProvider";
// import { createTheme, ThemeProvider } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect, useMemo, useState } from "react";

function DefaultThemeProvider({ children }) {
  const [ThemeMode, toggleTheme] = useTheme();
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: ThemeMode,
        },
      }),
    [ThemeMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultThemeProvider;
