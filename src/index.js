import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalProvider from "./context/Provider";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { GlobalStyle } from "./assets/theme/globalstyle";
import DefaultThemeProvider from "./context/DefaultThemeProvider";

ReactDOM.render(
  <GlobalProvider>
    <ThemeProvider>
      <GlobalStyle />
      <DefaultThemeProvider>
        <React.StrictMode>
          <Router>
            <Switch>
              <Routes />
            </Switch>
          </Router>
        </React.StrictMode>
      </DefaultThemeProvider>
    </ThemeProvider>
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
