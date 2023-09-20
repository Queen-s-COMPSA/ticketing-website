import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import cart from "./images/Vector.svg";
import bg_image from "./images/Events.png";
import EventCard from "./EventCard";

function App() {
  const events = [
    {
      title: "EVENT NAME HERE",
      price: "20.00",
      date: "September 30th 9:00PM - 10:30PM EST",
      location: "Goodwin Hall, Queen’s University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin, sagittis mauris id, venenatis leo.",
    },
    {
      title: "EVENT NAME HERE",
      price: "5.00",
      date: "September 30th 9:00PM - 10:30PM EST",
      location: "Goodwin Hall, Queen’s University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin, sagittis mauris id, venenatis leo.",
    },
    {
      title: "EVENT NAME HERE",
      price: "32.50",
      date: "September 30th 9:00PM - 10:30PM EST",
      location: "Goodwin Hall, Queen’s University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dui sollicitudin, sagittis mauris id, venenatis leo.",
    },
  ];

  return (
    <div className=''>
      <header className='bg-gray-800 p-3 flex justify-between items-center'>
        <div className='flex items-center ml-4'>
          <img src={logo} alt='Logo' className='h-10 w-10' />
        </div>

        <div className='flex space-x-4 text-white text-lg font-bold'>
          <button className=' py-2 px-4 hover:underline underline-offset-4 transition-duration-300'>EVENTS</button>
          <button className=' py-2 px-4 hover:underline underline-offset-4 transition-duration-300'>CONTACT</button>
          <button className='py-3 px-8 text-custom_yellow rounded-lg border-2 border-yellow-400 flex items-center'>
            <img src={cart} alt='Cart Icon' className='mr-2' /> {/* Use the imported cart image */}
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

      {/* Events */}
      <section className='flex flex-col items-center'>
        {/* Upcoming Events */}
        <section className='w-custon_max_w  flex items-center mt-52 mb-8'>
          <span className='w-full h-1  bg-custom_yellow '></span>
          <h6 className='text-4xl text-center mx-4 whitespace-nowrap font-medium'>UPCOMING EVENTS</h6>
          <span className='w-full h-1  bg-custom_yellow'></span>
        </section>

        <section className='w-custon_max_w flex flex-col items-center'>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </section>
        {/* All Events */}
        <section className='w-custon_max_w  flex flex-col items-center '>
          <button className=' bg-custom_dark_purple text-white mt-44 mb-40 px-10 py-3 rounded-lg'>View All</button>
        </section>
      </section>
    </div>
  );
}

export default App;
