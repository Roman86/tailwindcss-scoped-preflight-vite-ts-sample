import {scopedPreflightStyles} from "tailwindcss-scoped-preflight";

console.log('CFG');

/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
      // ... other plugins
      scopedPreflightStyles({
          cssSelector: '.twp', // or .tailwind-preflight or even [data-twp=true] - any valid CSS selector of your choice
          mode: 'matched only', // it's the default
      }),
  ],
}

