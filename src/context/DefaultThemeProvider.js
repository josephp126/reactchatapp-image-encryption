// import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "./ThemeProvider";
// import { createTheme, ThemeProvider } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo, } from "react";

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
          secondary: { main: ThemeMode == 'dark' ? "#747f8d" : "#36393f" },
          // background: { paper: ThemeMode == 'dark' ? "rgb(5, 30, 52)" : "rgb(102, 157, 246)" },
        },
      }),
    [ThemeMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultThemeProvider;
