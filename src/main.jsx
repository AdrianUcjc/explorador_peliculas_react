// React y ReactDOM para renderizar la aplicación
import React from "react";
import ReactDOM from "react-dom/client";
// BrowserRouter activa la navegación con rutas (/ y /favorites)
import { BrowserRouter } from "react-router-dom";
// Componente principal
import App from "./App.jsx";
import "./index.css";

// <div id="root"> del index.html, dibujamos ahí la aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
// BrowserRouter envuelve App para que las rutas funcionen dentro de ella
  <BrowserRouter>
    <App />
  </BrowserRouter>
);