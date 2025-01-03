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
        "text-color": "#000",
        "hover-text": "#00509d",
        "intro-text-color": "#727272",
        "light-bg": "#fff",
        "header-bg": "#fff",
        "header-text": "#000",
        "header-hover-text": "#00dd4d",
        "footer-bg": "#fafafa",
        "title-text": "#000000",
        "divider": "#d5d4d4",
        "video-section-bg": "#323232",
        "night-text": "#fff",
        "night-hover-text": "#3a86ff",
        "night-intro-text": "#adadad",
        "night-bg": "#2b3347",
        "night-header-bg": "#212529",
        "night-header-text": "#fff",
        "night-footer-bg": "#2b3347",
        "night-title-text": "#ffffff",
        "night-divider": "#828282",
        "night-video-section-bg": "#323232",
      },

    },
  },
  plugins: [
    
  ],
}

