/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: "lato",
    },
    extend: {
      colors: {
        Primary: {
          Blue: "#2F80ED",
          Dark: "#4F4F4F",
          Grey: "#828282",
          White: "#E0E0E0",
        },
        Indicator: {
          Orange: "#F8B76B",
          Purple: "#8785FF",
          Red: "#EB5757",
          Yellow: "#F2C94C",
        },
        Chats: {
          Light: {
            Orange: "#FCEED3",
            Purple: "#EEDCFF",
            Green: "#D2F2EA",
          },
          Solid: {
            Orange: "#E5A443",
            Purple: "#9B51E0",
            Green: "#43B78D",
          },
        },
        Stickers: {
          Light: {
            Blue: "#E9F3FF",
            Orange: "#FDCFA4",
            Cream: "#F9E9C3",
            Tosca: "#AFEBDB",
            Green: "#CBF1C2",
            Purple: "#CFCEF9",
            Pink: "#F9E0FD",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
