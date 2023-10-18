import React from "react";
import Tiktok_img from "./images/tiktok.svg";
import instagram_img from "./images/instagram.svg";
import discord_img from "./images/discord.svg";
import facebook_img from "./images/facebook.svg";
import linkedin_img from "./images/linkedin.svg";
import email_img from "./images/email.svg";

const Footer = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className='footer bg-custom_black text-white py-10 flex flex-col items-center justify-between text-center transition-all duration-300 ease-in-out'
    >
      <h1 className='font-book text-xl mb-2'>Stay Connected</h1>
      <div className='socials-container flex flex-wrap justify-center mb-5'>
        <a
          href='https://www.instagram.com/compsa/'
          className='contact-button bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={instagram_img} className='icon w-10 h-10' alt='Instagram' />
        </a>
        <a
          href='https://discord.com/invite/pmC8tATvhq'
          className='contact-button bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={discord_img} className='icon w-10 h-10' alt='Discord' />
        </a>
        <a
          href='https://www.tiktok.com/@compsa?lang=en'
          className=' bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={Tiktok_img} className=' w-10 h-10' alt='Tiktok' />
        </a>
        <a
          href='https://www.facebook.com/queenscompsa'
          className='contact-button bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={facebook_img} className='icon w-10 h-10' alt='Facebook' />
        </a>
        <a
          href='https://www.linkedin.com/company/queenscompsa/'
          className='contact-button bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={linkedin_img} className='icon w-10 h-10' alt='Linkedin' />
        </a>
        <a
          href='mailto:help@compsa.queensu.ca'
          className='contact-button bg-white rounded-full m-2 p-2 hover:bg-custom_yellow transition-all duration-300 ease-in-out'
        >
          <img src={email_img} className='icon w-10 h-10 transform scale-85' alt='Email' />
        </a>
      </div>
      <h1 className='font-book text-xl mb-2'>Land Acknowledgement</h1>
      <p className='w-2/5 text-base'>
        Let us acknowledge that Queen’s is situated on traditional Anishinaabe (Ah-nish-in-ah-bay) and Haudenosaunee (Ho-den-o-show-nee) territory. We
        are grateful to be able to live, learn, and play on these lands.
      </p>
      <span className='copyright mt-5 text-yellow-500 text-xs'>©2023 COMPSA. All rights reserved.</span>
    </div>
  );
});

export default Footer;
