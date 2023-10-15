import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import cart_white from "./images/cart_white.svg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className='bg-custom_black p-3 flex justify-between items-center'>
      <div className='flex items-center ml-4'>
        <img src={logo} alt='Logo' className='h-10 w-10' />
      </div>

      {/* Hamburger menu icon */}
      <button className='hamburger' onClick={() => setMenuActive(!menuActive)}>
        ☰
      </button>

      <div className={`header-nav flex space-x-4 text-white text-lg font-bold ${menuActive ? "active" : ""}`}>
        <button className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out'>EVENTS</button>
        <button className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out'>CONTACT</button>
        <button className='py-3 px-8 text-custom_yellow rounded-lg border-2 hover:bg-custom_yellow hover:text-white border-custom_yellow flex items-center group'>
          <div className='mr-2 group-hover:hidden '>
            <img src={cart} alt='Cart Icon' />
          </div>
          <div className='mr-2 hidden group-hover:inline '>
            <img src={cart_white} alt='Cart Icon' />
          </div>
          Tickets
        </button>
      </div>
    </header>
  );
}

export default Header;
