/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        custom_bg_h: "53rem", // You can replace '40rem' with your desired max-height value
      },
      width: {
        custon_max_w: "47.5rem",
      },
      textColor: {
        custom_yellow: "#D7DE21",
        custom_purple: "#C686F3",
      },
      backgroundColor: {
        custom_yellow: "#D7DE21",
        custom_dark_purple: "#5D15D2",
      },
      backgroundImage: {
        "custom-bg": 'linear-gradient(187deg, rgba(31, 31, 31, 0.00) 20.41%, #1F1F1F 89.83%), url("../src/images/Events.png")',
      },
    },
  },
  plugins: [],
};
