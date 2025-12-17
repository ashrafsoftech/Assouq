import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./menu.css"; // add here once
import "./responsive.css"; // keep global, after menu.css
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
