import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css"; // Importa os estilos globais

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
