import React from "react";

function Footer(){
   var date = new Date();
   var currentYear = date.getFullYear();
   
   return(
       <p className="footer"> Dipal Shrestha Copyright &copy; {currentYear} </p>
   )
}

export default Footer;