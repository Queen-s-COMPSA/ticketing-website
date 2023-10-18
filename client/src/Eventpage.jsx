import React, { useEffect, useState } from "react";
import polygon from "./images/Polygon.svg"; // This is the traingle shape at the bottom
import strimmer from "./images/elements.svg"; // This is the traingle shape at the bottom

function HomePage() {
  return (
    <div className=''>
      {/* Home Page */}
      <section className='h-96 bg-custom_black flex items-center justify-center text-center font-bold'>
        <div className='h-min justify-center'>
          <img src={strimmer} alt='Description of the Image'></img>
          <div className='text-4xl text-white'>Event Title Here</div>
        </div>
      </section>

      {/* The triangle*/}
      <div className='bg-custom_black text-yellow-400 h-10 relative flex justify-center items-end'>
        <img src={polygon} className='absolute top-full' />
      </div>
    </div>
  );
}

export default HomePage;
