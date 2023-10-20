import React, { useState, useEffect } from "react";
import axios from "axios";

function EventCard({
  createdAt,
  date,
  description,
  has_tickets,
  is_public,
  location,
  name,
  tickets_available,
  tickets_price,
  updatedAt,
  uuid,
}) {
  function formatDateAndTime(isoString) {
    const dateObj = new Date(isoString);

    // Extracting date components
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[dateObj.getMonth()];

    // Converting day to its respective ordinal form (like "1st", "2nd", etc.)
    let dayWithSuffix =
      day +
      (day > 3 && day < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][
            day % 10
          ]);

    // Extracting and formatting the time
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // If 0, make it 12

    return {
      date: `${month} ${dayWithSuffix} ${year}`,
      time: `${hours}${ampm}`,
    };
  }

  const { date: formattedDate, time: formattedTime } = formatDateAndTime(date);

  const [ticketsLeft, setTicketsLeft] = useState(null);

  useEffect(() => {
    // Fetching the number of tickets left
    axios
      .get(
        `https://api.compsa.ca/tickets.compsa.ca/tickets/tickets-left/${uuid}`
      )
      .then((response) => {
        setTicketsLeft(response.data); // adjust based on the API response structure
      })
      .catch((error) => {
        console.error("Error fetching tickets left:", error);
      });
  }, [uuid]); // Dependency array to make the call once when UUID changes

  return (
    <div className="w-full p-4">
      <div className="bg-custom_black text-white border rounded-2xl shadow-lg pl-10 pr-10 pt-4 pb-4 relative">
        <div className="flex justify-between items-start">
          <h2 className="text-4xl font-semibold flex-grow">{name}</h2>

          {tickets_price ? (
            <p className="text-green-600 text-4xl">${tickets_price}</p>
          ) : (
            <p className="text-green-600 text-4xl">Free</p>
          )}
        </div>
        <h5>
          {ticketsLeft ? (
            ticketsLeft !== 0 ? (
              <p className="text-gray-400 text-xl">
                {ticketsLeft} Tickets Left
              </p>
            ) : (
              "Sold Out"
            )
          ) : (
            <></>
          )}
        </h5>

        <p className=" text-custom_yellow text-xl font-semibold">
          {formattedDate}
        </p>
        <p className="text-lg mt-4">{description}</p>

        {tickets_price ? (
          <button
            className="border-white border-2 text-white mt-4 px-10 py-3 rounded-lg hover:bg-white hover:text-custom_black transition-all duration-300 ease-in-out"
            role="button"
          >
            <a href={`https://payments.compsa.ca/checkout.html?event=${uuid}`}>
              Purchase Now!
            </a>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventCard;
