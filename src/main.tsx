import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";

import { App } from "./App.js";
import "./styles/app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Tooltip.Provider delayDuration={250}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Tooltip.Provider>
  </React.StrictMode>,
);
