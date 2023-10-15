import React, { useState } from "react";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import cart_white from "./images/cart_white.svg";

function Header({ setActivePage, onContactClick, handleTicketsClick }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className='bg-custom_black p-3 flex justify-between items-center'>
      <div className='flex items-center ml-4'>
        <img src={logo} alt='Logo' className='h-10 w-10' />
      </div>

      <div className='mobile-menu-container'>
        <button className='pb-2 text-white font-bold text-5xl sm:hidden' onClick={() => setMenuActive(!menuActive)}>
          ☰
        </button>

        {/* Mobile */}
        <div
          className={`header-nav transition-all p-3 bg-custom_black rounded-bl-lg absolute z-10 right-0 top-19 flex-col space-y-4 text-white text-lg font-bold sm:hidden ${
            menuActive ? "flex" : "hidden"
          }`}
        >
          <button
            className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out '
            onClick={() => {
              setActivePage(true);
              setMenuActive(!menuActive);
            }}
          >
            EVENTS
          </button>
          <button
            className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out'
            onClick={() => {
              onContactClick();
              setMenuActive(!menuActive);
            }}
          >
            CONTACT
          </button>
          <button
            className='py-3 px-8 text-custom_yellow rounded-lg border-2 hover:bg-custom_yellow hover:text-white border-custom_yellow flex items-center group'
            onClick={() => {
              handleTicketsClick();
              setMenuActive(!menuActive);
            }}
          >
            <div className='mr-2 group-hover:hidden '>
              <img src={cart} alt='Cart Icon' />
            </div>
            <div className='mr-2 hidden group-hover:inline '>
              <img src={cart_white} alt='Cart Icon' />
            </div>
            Tickets
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className={`header-nav hidden  space-x-4 text-white text-lg font-bold sm:flex ${menuActive ? "hidden" : ""}`}>
        <button
          className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out'
          onClick={() => {
            setActivePage(true);
            setMenuActive(!menuActive);
          }}
        >
          EVENTS
        </button>
        <button
          className='py-2 px-4 hover:underline underline-offset-4 transition-all duration-300 ease-in-out'
          onClick={() => {
            onContactClick();
            setMenuActive(!menuActive);
          }}
        >
          CONTACT
        </button>

        <button
          className='py-3 px-8 text-custom_yellow rounded-lg border-2 hover:bg-custom_yellow hover:text-white border-custom_yellow flex items-center group'
          onClick={() => {
            handleTicketsClick();
            setMenuActive(!menuActive);
          }}
        >
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
