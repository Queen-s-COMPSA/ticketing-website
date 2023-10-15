import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Info from "./Info";
import Eventpage from "./Eventpage";
import Events from "./Events";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

function App() {
  const [activePage, setActivePage] = useState("events"); // default to events

  return (
    <React.StrictMode>
      <Header setActivePage={setActivePage} />
      {activePage === "events" && <Eventpage />}
      {activePage === "events" && <Info />}
      {activePage !== "events" && <Homepage />}
      {activePage !== "events" && <Events />}
      <Footer />
    </React.StrictMode>
  );
}

export default App;
