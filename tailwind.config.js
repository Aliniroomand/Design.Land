/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      colors:{
        lightPink:"#FBE5E5",
        lightPink2:"#FFA1C9",
        darkPink:"#F94892",
        darkPink2:"#E60965",
        darkPurple:"#680747",
        Black:"#141010"
      },
      fontFamily:{
        fa1:"Amiri",
        fa2:"Noto Naskh Arabic",
        en:"Delius"
      },
      container:{
        center:true,
        padding:"15px"
      }

      
    },
  },
  plugins: [],
}

