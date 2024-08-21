import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "@/assets/Fonts/ProductSans/style.css";
import { ThemeProvider } from "./ThemeProvider"; // Import your ThemeProvider

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
