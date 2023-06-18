import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/About/AboutMe";
import StartPage from "./Components/Start/StartPage";
import PortFolio from "./Components/Portfolio/PortFolio";
import Contact from "./Components/Contact/Contact";
import { WebApps } from "./Components/Portfolio/WebApps";
import { FrontendMentor } from "./Components/Portfolio/FrontendMentor";
import { Websites } from "./Components/Portfolio/Websites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<StartPage />} index />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<PortFolio />}>
            <Route element={<WebApps />} index />
            <Route element={<WebApps />} path="web-applications" />
            <Route path="frontend-mentor" element={<FrontendMentor />} />
            <Route path="websites" element={<Websites />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
