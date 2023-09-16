/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
      fontSize: {
        "custom-xs": "0.75rem",
        "custom-sm": "0.875rem",
        "custom-md": "1rem",
        "custom-lg": "1.125rem",
        "custom-xl": "1.25rem",
        "custom-n": "30px",
      },
      lineHeight: {
        "custom-xs": "1.25",
        "custom-sm": "1.375",
        "custom-md": "1.5",
        "custom-lg": "1.625",
        "custom-xl": "1.75",
        "custom-s": "45px",
      },
      colors: {
        myCustomColor: {
          100: "rgba(255, 0, 0, 0.1)",
          200: "rgba(255, 0, 0, 0.2)",
          300: "rgba(255, 0, 0, 0.3)",
          400: "rgba(255, 255, 255, 1)",
          500: "rgba(249, 249, 249, 1)",
        },
      },
    },
  },
  plugins: [],
};
