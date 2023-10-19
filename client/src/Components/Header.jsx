import React, { useState } from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.svg";
import cart_white from "../images/cart_white.svg";
import { useNavigate } from "react-router-dom";

function Header({ targetRef }) {
  const navigate = useNavigate();

  return (
    <header className="bg-custom_black p-3 flex justify-between items-center">
      <div className="flex items-center ml-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Desktop */}
      <div
        className={`header-nav hidden  space-x-4 text-white text-lg font-bold sm:flex `}
      >
        <button
          onClick={() => {
            targetRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
        >
          VIEW EVENTS
        </button>
        <button
          onClick={() => (window.location.href = "https://compsa.ca/contact")}
          className="py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}

export default Header;
