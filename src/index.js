import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalContextProvider } from "./store/GlobalState";
import "./index.css";

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById("root")
);
