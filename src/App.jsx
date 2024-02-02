import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
        <Link to="/">home</Link>
          <Link to="/Blue">blue</Link>
          <Link to="/Red">red</Link>

        </div>
        <p id="text">Click Blue or Red!</p>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
