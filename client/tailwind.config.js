/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        custom_bg_h: "53rem", // You can replace '40rem' with your desired max-height value
      },
      width: {
        custom_max_w: "47.5rem",
      },
      maxWidth: {
        custon_max_w: "47.5rem",
      },
      textColor: {
        custom_yellow: "#D7DE21",
        custom_purple: "#5D15D2",
        custom_black: "#1f1f1f",
      },
      backgroundColor: {
        custom_yellow: "#D7DE21",
        custom_dark_purple: "#5D15D2",
        custom_black: "#1f1f1f",
      },
      backgroundImage: {
        "custom-bg":
          'linear-gradient(187deg, rgba(31, 31, 31, 0.00) 20.41%, #1F1F1F 89.83%), url("../src/images/Events.png")',
      },
      borderColor: {
        custom_dark_purple: "#5D15D2",
        custom_yellow: "#D7DE21",
      },
      minHeight: {
        custom_info_h: 250,
      },
    },
  },
  plugins: [],
};
