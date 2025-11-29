import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

import "./index.css";
import Index from "./Index";
import Estudos from "./pages/estudos/Estudos";
import InteractiveLampada from "./pages/projetos/lampada/InteractiveLampada";
import ListaInterativa from "./pages/projetos/ListaInterativa/ListaInterativa";
import ExerciciosJS from "./pages/projetos/exerciciosJavaScript/ExerciciosJS";

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

        <Route path="/estudos" element={<Estudos />} />
        <Route path="/projeto" element={<InteractiveLampada />} />
        <Route path="/projeto1" element={<ListaInterativa />} />
        <Route path="/exercicios" element={<ExerciciosJS />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
