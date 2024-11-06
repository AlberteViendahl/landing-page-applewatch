/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "60px": "60px",
      },
      borderRadius: {
        15: "15px",
        100: "100%",
        0: "0%",
        24: "24px",
      },
      width: {
        1240: "1240px",
        640: "640px",
        60: "60px",
        20: "20px",
        90: "90px",
        131: "131px",
        386: "386px",
        400: "400px",
      },
      height: {
        800: "800px",
        60: "60px",
        20: "20px",
        90: "90px",
        70: "70px",
        386: "386px",
        2: "2px",
      },
      colors: {
        "custom-gray": "#B6CCDA",
        grey: "#434558",
        blue: "#6ADDCC",
        pink: "#F9CDC4",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
