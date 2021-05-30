import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { responsiveTheme } from "./utils/responsiveTheme";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={responsiveTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>,
  document.querySelector("#root")
);
