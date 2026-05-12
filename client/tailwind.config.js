/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#101113",
        panel: "#17191d",
        ember: "#ff3d00",
        flame: "#ff7a18",
        volt: "#29b6f6"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 61, 0, 0.22)",
        blueGlow: "0 0 35px rgba(41, 182, 246, 0.2)"
      }
    }
  },
  plugins: []
};
