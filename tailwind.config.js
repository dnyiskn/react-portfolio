module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 40.1s linear infinite",
        "spin-med": "spin 20.7s linear infinite",
        "spin-fast": "spin 20.5s linear infinite",
      },
      colors: {
        git: "#f1502f",
        linkedIn: "#0075B7",
      },
    },
  },
  plugins: [],
};
