import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "@/reportWebVitals";

import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("No root element found");
const root = createRoot(container);
const RootElement = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (import.meta.env.VITE_APP_IS_SANDBOX === "true") {
  import("./test/mocks/browser")
    .then(({ worker }) => worker.start())
    .then(() => root.render(RootElement));
} else root.render(RootElement);

reportWebVitals(console.log);
