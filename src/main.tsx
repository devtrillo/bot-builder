import "./index.css";

import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "@/reportWebVitals";

import App from "./App";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
