// import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "./ThemeProvider";
// import { createTheme, ThemeProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";

function DefaultThemeProvider({ children }) {
  const [ThemeMode] = useTheme();

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: ThemeMode,
          // primary: { main: ThemeMode == 'dark' ? "rgb(102, 157, 246)" : "rgb(102, 157, 246)" },
          secondary: { main: ThemeMode == "dark" ? "#747f8d" : "#36393f" },
          third: {
            main: ThemeMode == "dark" ? "#424448" : "#E3E5E8",
            secondary: ThemeMode == "dark" ? "#505256" : "#F2F3F5",
          },
          greenColor: {
            main: ThemeMode == "dark" ? "#3ba55d" : "#3ba55d",
          },
          errorColor: { main: ThemeMode == "dark" ? "#ff8da1" : "#ff1476" },
          background: { paper: ThemeMode == "dark" ? "#2f3136" : "#f2f3f5" },
        },
      }),
    [ThemeMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultThemeProvider;
