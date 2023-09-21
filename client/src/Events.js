import React, { useEffect, useState } from "react";
import bg_image from "./images/Events.png";
import EventCard from "./EventCard";

function Events() {
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

export default Events;
