import React, { useState, useRef } from "react";
import "./index.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Info from "./Info";
import Eventpage from "./Eventpage";
import Events from "./Events";
import Footer from "./Footer";

function App() {
  const [activePage, setActivePage] = useState(true); // default to events
  const footerRef = useRef(null);
  const eventsRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleEventCardButtonClick = () => {
    setActivePage(false);
    window.scrollTo(0, 0);
  };

  const handleTicketsClick = () => {
    setActivePage(true);

    setTimeout(() => {
      if (eventsRef.current) {
        eventsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <React.StrictMode>
      <Header setActivePage={setActivePage} onContactClick={scrollToFooter} handleTicketsClick={handleTicketsClick} />
      {activePage === false && <Eventpage />}
      {activePage === false && <Info />}
      {activePage === true && <Homepage />}
      {activePage === true && <Events onEventCardClick={handleEventCardButtonClick} ref={eventsRef} />}
      <Footer ref={footerRef} />
    </React.StrictMode>
  );
}

export default App;
