import React, { useState, useRef } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Pages/router";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
