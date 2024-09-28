/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        "primary": "#124B65",
        "font-color": "#151515",
        "hover-font": "#3b82f6",
        "intro-font-color": "#727272",
        "light-bg": "#fafafa",
        "header-bg": "#000000",
        "footer-bg": "#2b3136",
        "title-font": "#000000",
        "divider": "#d5d4d4",
        "night-font": "#fff",
        "night-hover-font": "#3b82f6",
        "night-intro-font": "#adadad",
        "night-bg": "#2b3347",
        "night-header-bg": "#124B65",
        "night-footer-bg": "#202a32",
        "night-title-font": "#ffffff",
        "night-divider": "#828282",
      },

    },
  },
  plugins: [
    
  ],
}

