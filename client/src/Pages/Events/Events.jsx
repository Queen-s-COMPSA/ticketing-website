import React, { useState, useEffect, forwardRef } from "react";
import Axios from "axios";
import EventCard from "./EventCard";

const Events = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState([]);

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await Axios.get(
          "https://api.compsa.ca/tickets.compsa.ca/events"
        );
        console.log("response: ", response);
        if (response.data) {
          const sortedEvents = response.data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB; // sorts in ascending order. Use `dateB - dateA` for descending order.
          });
          setEvents(sortedEvents);
        }
        console.log("Data: ", events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div ref={ref}>
      {/* Events */}
      <section className=" flex flex-col items-center">
        {/* Upcoming Events */}
        <section className="max-w-custon_max_w w-full flex items-center mt-52 mb-8">
          <span className="w-full h-1  bg-custom_yellow "></span>
          <h6 className="text-4xl text-center mx-4 whitespace-nowrap font-medium">
            UPCOMING EVENTS
          </h6>
          <span className="w-full h-1  bg-custom_yellow"></span>
        </section>
        {events !== [] ? (
          <>
            <section className="max-w-custon_max_w flex flex-col items-center">
              {events.map((event, index) => {
                if (event.has_tickets)
                  return <EventCard key={index} {...event} />;
              })}
            </section>
          </>
        ) : (
          <div className={`flex items-center mb-10`}>
            <div className="flex-1 h-1  bg-custom_yellow"></div>
            <h5 className="text-2xl text-center mx-4 whitespace-nowrap font-medium">
              No Current Events
            </h5>
            <div className="flex-grow h-1 bg-custom_yellow"></div>
          </div>
        )}
      </section>
    </div>
  );
});

export default Events;
