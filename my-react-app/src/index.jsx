import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import Exercise from "./pages/Exercise";
import Nutrition from "./pages/Nutrition";
import Recipes from "./pages/Recipes";
import Running from "./pages/Running";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/react-frontend-spring2026">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="exercise/running" element={<Running />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="nutrition/recipes" element={<Recipes />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
