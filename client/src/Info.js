import React from "react";
import location from "./images/location.svg";
import cart_purple from "./images/cart_purple.svg";
import cart_white from "./images/cart_white.svg";

function Info() {
  return (
    <div className='flex items-center justify-center'>
      <section className='  w-custon_max_w mt-36 mb-36'>
        {/* Location */}
        <section className='min-h-custom_info_h'>
          <section className=' flex items-center mb-2  '>
            <img src={location} />
            <h6 className='text-4xl pl-4 text-center pr-5 whitespace-nowrap font-medium'>Location & Time</h6>
            <span className='w-full h-1  bg-custom_yellow'></span>
          </section>
          <h1 className='font-bold mb-1 '>September 30th 9:00PM - 10:00PM EST</h1>
          <p className=' w-4/5'>Goodwin Hall, Queen’s University</p>
        </section>

        {/* info */}
        <section className=' min-h-custom_info_h'>
          <section className=' flex items-center  '>
            <h6 className='text-4xl text-center pr-5 whitespace-nowrap font-medium'>About this event</h6>
            <span className='w-full h-1  bg-custom_yellow'></span>
          </section>
          <p className=' w-4/5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin, sagittis mauris id, venenatis leo. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin, sagittis mauris id, venenatis leo.
          </p>
        </section>

        {/* Ticket */}
        <section className=''>
          <section className=' flex items-center  '>
            <h6 className='text-4xl text-center pr-5 whitespace-nowrap font-medium'>Tickets</h6>
            <span className='w-full h-1  bg-custom_yellow'></span>
          </section>
          <div className='flex font-bold'>
            Ticket Fare: <div className='px-2 font-normal'> $5.00</div>
          </div>
          <button className='mt-5 py-3 px-6 bg-custom_dark_purple text-white rounded-lg border-2 hover:bg-white hover:text-custom_purple border-custom_dark_purple flex items-center group'>
            <div className='mr-2 group-hover:hidden '>
              <img src={cart_white} alt='Cart Icon' />
            </div>
            <div className='mr-2 hidden group-hover:inline '>
              <img src={cart_purple} alt='Cart Icon' />
            </div>
            Add to cart
          </button>
        </section>
      </section>
    </div>
  );
}

export default Info;
