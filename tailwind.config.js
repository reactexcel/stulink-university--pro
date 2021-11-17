module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#131921",
          850: "#232F3E",
          550: "#29ABE2",
          850: "#102731",
        },
        green: {
          550: "#1DB954"
        }
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      fontSize:{
        text:{
          28:"28px"
        }
      },
    },
    
    minHeight: {
      99: "800px",
    },
    
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled", "checked"],
      cursor: ["disabled"],
    },
     
  },
  plugins: [],
};
