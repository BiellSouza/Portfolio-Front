import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
    <footer className="w-full bg-secondary">
      <h1 className="text-center text-[20px]">Obrigado pela presença!</h1>
    </footer>
  </StrictMode>
);
