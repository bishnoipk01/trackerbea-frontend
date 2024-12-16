/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include the App directory files
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Replace with your brand color
      },
    },
  },
  plugins: [],
};
