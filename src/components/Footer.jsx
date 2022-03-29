import React from "react";

function Footer(){
   var date = new Date();
   var currentYear = date.getFullYear();
   
   return(
       <p className="footer"> Dipal Copyright &copy; {currentYear} </p>
   )
}

export default Footer;