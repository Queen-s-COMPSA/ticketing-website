import React, { useState, useEffect } from "react";
import Axios from "axios";
import location from "./images/location.svg";
import cart_purple from "./images/cart_purple.svg";
import cart_white from "./images/cart_white.svg";

function Info({ eventId }) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventInfo = async () => {
      try {
        const response = await Axios.get(`YOUR_BACKEND_URL/event/${eventId}`);
        if (response.data) {
          setEventData(response.data);
        }
        console.log("EVENT INFO: ", eventData);
      } catch (error) {
        console.error("Error fetching event info:", error);
      }
    };

    fetchEventInfo();
  }, [eventId]);

  // Return early while data is being fetched or if there's no data
  if (!eventData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center">
      <section className=" w-custon_max_w mt-36 mb-36 text-center sm:text-left">
        {/* Location */}
        <section className="min-h-custom_info_h p-10 lg:p-0 flex flex-col items-center sm:items-start ">
          <section className="sm:w-full flex items-center mb-2 ">
            <img src={location} alt="Location Icon" />
            <h6 className="text-4xl pl-4 text-center pr-0 sm:pr-5 whitespace-nowrap font-medium">
              Location & Time
            </h6>
            <span className="block w-0 sm:w-full h-1 bg-custom_yellow"></span>
          </section>
          <h1 className="font-bold mb-1 ">{eventData.date}</h1>
          <p className="w-4/5">{eventData.location}</p>
        </section>

        {/* info */}
        <section className=" min-h-custom_info_h p-10 lg:p-0 ">
          <section className=" flex items-center  ">
            <h6 className="text-4xl pr-5 m-auto whitespace-nowrap font-medium">
              About this event
            </h6>
            <span className="sm:w-full w-auto h-1 bg-custom_yellow"></span>
          </section>
          <p className=" sm:w-4/5 m-auto sm:m-0">{eventData.description}</p>
        </section>

        {/* Ticket */}
        <section className="p-10 lg:p-0 flex flex-col items-center sm:items-start">
          <section className="w-full sm:flex items-center  ">
            <h6 className="text-4xl text-center pr-5 whitespace-nowrap font-medium">
              Tickets
            </h6>
            <span className="sm:w-full h-1 invisible sm:visible w-0  bg-custom_yellow"></span>
          </section>
          <div className="flex font-bold text-center">
            Ticket Fare:{" "}
            <div className="px-2 font-normal "> ${eventData.price}</div>
          </div>
          <button className="mt-5 py-3 px-6 bg-custom_dark_purple border-2 text-white rounded-lg  hover:bg-white hover:text-custom_purple border-custom_dark_purple flex items-center group">
            <div className="mr-2 group-hover:hidden ">
              <img src={cart_white} alt="Cart Icon" />
            </div>
            <div className="mr-2 hidden group-hover:inline ">
              <img src={cart_purple} alt="Cart Icon" />
            </div>
            Add to cart
          </button>
        </section>
      </section>
    </div>
  );
}

export default Info;
