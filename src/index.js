import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/About/AboutMe";
import StartPage from "./Components/Start/StartPage";
import PortFolio from "./Components/Portfolio/PortFolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartPage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="start-page" element={<StartPage />} />
          <Route path="portfolio" element={<PortFolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
