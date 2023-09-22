import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import cart_white from "./images/cart_white.svg";
import polygon from "./images/Polygon.svg"; // This is the traingle shape at the bottom

function App() {
  return (
    <div className=''>
      {/* Header */}
      <header className='bg-custom_black p-3 flex justify-between items-center'>
        <div className='flex items-center ml-4'>
          <img src={logo} alt='Logo' className='h-10 w-10' />
        </div>

        <div className='flex space-x-4 text-white text-lg font-bold'>
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

      {/* Home Page */}
      <section className='bg-custom-bg bg-hero-pattern  bg-cover bg-center h-screen max-h-custom_bg_h flex justify-center items-center '>
        <div className='w-custon_max_w mt-96 '>
          <h6 className='text-5xl font-bold text-custom_yellow '>COMPSA EVENTS</h6>
          <p className='text-2xl pt-6 text-white'>
            Description about ticket purchasing or something? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin,
            sagittis mauris id, venenatis leo.
          </p>
        </div>
      </section>

      {/* The triangle*/}
      <div className='bg-custom_black text-yellow-400 h-10 relative flex justify-center items-end'>
        <img src={polygon} className='absolute top-full' />
      </div>
    </div>
  );
}

export default App;
