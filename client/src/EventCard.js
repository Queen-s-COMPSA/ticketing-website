import React from "react";

function EventCard({ title, price, date, location, description }) {
  return (
    <div className='w-full  p-4'>
      <div className='bg-custom_black text-white  border rounded-2xl shadow-lg pl-10 pr-10 pt-4 pb-4'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-custom_purple mb-3 text-lg'>${price}</p>
        <p className='text-lg font-semibold'>{date}</p>
        <p className=''>{location}</p>
        <p className='text-lg mt-4'>{description}</p>
        <button className='border-white border-2 text-white hover:bg-purple-800 mt-4 px-10 py-3 rounded-lg'>See Info</button>
      </div>
    </div>
  );
}

export default EventCard;
