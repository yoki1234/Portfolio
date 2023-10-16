import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3md": "0 6px 2px rgba(0, 0, 0, 1)",
        "2md": "1px 2px 1px rgba(0, 0, 0, 1)",
        "4md": "6px 6px 0 rgba(116,95,0,1)",
        "5md": "4px 4px 0 rgba(116,95,0,1)",
      },
      colors: {
        "off-white": "#FFFFDD",
        "peppermint": "#A7FBB7",
        "dullGold":"#C07F00",
        "gold": "#eab308",
      },
    },
    fontFamily: {
      gloock: ["Gloock", "serif", ...defaultTheme.fontFamily.sans],
      pixelify: ["Pixelify Sans", "cursive", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gold-thin-scroll':{
          scrollbarWidth:'thin',
          scrollbarColor: '#C07F00 transparent'
        },
        '.gold-thin-scroll::-webkit-scrollbar':{
          width: '2px',
        },
        '.gold-thin-scroll::-webkit-scrollbar-track': {
          background: '#eab308',
          borderRadius: '8px',
        },
        '.gold-thin-scroll::-webkit-scrollbar-thumb':{
          backgroundColor: '#C07F00',
          borderRadius:'14px',        
        },
      });
    }),
  ],
};
