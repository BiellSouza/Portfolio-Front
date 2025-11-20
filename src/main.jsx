import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

import "./index.css";
import Index from "./Index";
import Estudos from "./pages/estudos/Estudos";
import GerenciadorTarefas from "./pages/gerenciador/GerenciadorTarefas";
import SpotifyClone from "./pages/projetos/SpotifyClone";

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
        <Route path="/project1" element={<SpotifyClone />} />
        <Route path="/tarefas" element={<GerenciadorTarefas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
