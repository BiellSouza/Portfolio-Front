import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./Index";
import Dashboard from "./sections/Dashboard";
import DashboardFinanceiro from "./pages/DashboardFinanceiro/DashboardFinanceiro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página principal do seu portfólio */}
        <Route
          path="/"
          element={
            <>
              <Index />
              <footer className="w-full bg-secondary py-4">
                <h1 className="text-center text-[20px] text-white">
                  Obrigado pela presença!
                </h1>
              </footer>
            </>
          }
        />
        {/* Dashboard teste */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard financeiro */}
        <Route path="/dashboardfinanceiro" element={<DashboardFinanceiro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
