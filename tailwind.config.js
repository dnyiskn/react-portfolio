module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10.1s linear infinite",
        "spin-med": "spin 10.7s linear infinite",
        "spin-fast": "spin 10.5s linear infinite",
      },
    },
  },
  plugins: [],
};
