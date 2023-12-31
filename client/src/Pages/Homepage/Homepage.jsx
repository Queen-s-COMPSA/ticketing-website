import React, { useEffect, useState } from "react";
import polygon from "../../images/Polygon.svg"; // This is the traingle shape at the bottom

function HomePage() {
  return (
    <div className="">
      {/* Home Page */}
      <section className="bg-custom-bg bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center relative">
        {/* HomePage Content */}
        <div className="absolute w-3/4 max-w-3xl -bottom-16 left-1/2 transform -translate-y-full  -translate-x-1/2 px-5 ">
          <h6 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom_yellow ">
            COMPSA EVENTS
          </h6>
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl pt-4 sm:pt-5 md:pt-6 lg:pt-8 text-white">
            Welcome to the COMPSA Ticketing Platform! Here you can purchase
            tickets for all COMPSA Related Events. Coming Soon to Other
            Faculties!
          </p>
        </div>

        {/* Info Content */}
      </section>

      {/* The triangle*/}
      <div className="bg-custom_black text-yellow-400 h-10 relative flex justify-center items-end">
        <img src={polygon} className="absolute top-full" />
      </div>
    </div>
  );
}

export default HomePage;
