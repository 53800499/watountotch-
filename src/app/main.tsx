import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRouter from "./routes.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/js/index";
import "../assets/data/slide-hero";
import "../assets/css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);