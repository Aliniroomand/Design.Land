/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      colors:{
        lightPink:"#f97fbc61",
        lightPink2:"#FFA1C9",
        darkPink:"#F94892",
        darkPink2:"#E60965",
        darkPurple:"#680747",
        Black:"#141010",
        lightBG:"#a8b1eb",
        lightBG2:"#96cfec",

        //  , #6c779a
      },
      fontFamily:{
        fa1:"Amiri",
        fa2:"Noto Naskh Arabic",
        en:"Delius"
      },
      container:{
        center:true,
      },
      dropShadow:{
        "4xl":"-5px 5px 3px #000",
        "3xl":"0 0 3px #fff,-2px 2px 3px #000 ",
        "text":"0 0 3px #fff,-2px 2px 3px #000 "
      },
      
     }
  },
  plugins: [],
}

