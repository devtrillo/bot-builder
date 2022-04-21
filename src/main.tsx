import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "@/reportWebVitals";

import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("No root element found");
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals(console.log);
