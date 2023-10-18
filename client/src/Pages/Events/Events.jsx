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
          "http://localhost:3000/ticketingservice/events"
        );
        console.log("response: ", response);
        if (response.data) {
          setEvents(response.data);
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
        {events == [] ? (
          <>
            <section className="max-w-custon_max_w flex flex-col items-center">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  {...event}
                  onButtonClick={props.onEventCardClick}
                />
              ))}
            </section>
            {/* All Events */}
            <section className="max-w-custon_max_w  flex flex-col items-center ">
              <div
                id="contentWrapper"
                className={` transition-all duration-300 ease-in-out ${
                  isVisible
                    ? "mt-40 scale-100 opacity-100"
                    : "mt-0 scale-0 opacity-0"
                }`}
              >
                <div className={`w-full flex items-center `}>
                  <div className="flex-1 h-1 bg-custom_yellow"></div>
                  <h6 className="text-4xl text-center mx-4 whitespace-nowrap font-medium">
                    All Events
                  </h6>
                  <div className="flex-grow h-1 bg-custom_yellow"></div>
                </div>
                <section
                  id="contentContainer"
                  style={{
                    height: isVisible ? "auto" : "0",
                    overflow: "hidden",
                  }}
                >
                  {events.map((event, index) => (
                    <EventCard
                      key={index}
                      {...event}
                      onButtonClick={props.onEventCardClick}
                    />
                  ))}
                </section>
              </div>
              <button
                id="toggleButton"
                className="bg-custom_dark_purple border-2 border-custom_dark_purple transition-all duration-300 ease-in-out text-white mt-14 mb-40 px-10 py-3 rounded-lg hover:bg-white hover:text-custom_purple"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "View Less" : "View All"}
              </button>
            </section>
          </>
        ) : (
          <div className={`flex items-center mb-10`}>
            <div className="flex-1 h-1  bg-custom_yellow"></div>
            <h9 className="text-2xl text-center mx-4 whitespace-nowrap font-medium">
              No Current Events
            </h9>
            <div className="flex-grow h-1 bg-custom_yellow"></div>
          </div>
        )}
      </section>
    </div>
  );
});

export default Events;
